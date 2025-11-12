import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

// route, navigation props we automatically get here since it is a component which loaded as a screen
function ManageExpense({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false); // display loading spinner
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId; // ? -> JS checks if that property exists, if not it won't 'drill' into it further more
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  // useLayoutEffect hook to avoid flickering
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    expensesCtx.deleteExpense(editedExpenseId);
    await deleteExpense(editedExpenseId); // this way we wait to complete this call, then close the modal and go back
    // setIsSubmitting(false); -> no need for this, because we navigate back to the prev. screen
    navigation.goBack(); // goBack() is built-in, equivalent to back button press
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) { // now this is async because storeExpense() returns a Promise
    setIsSubmitting(true);
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
      await updateExpense(editedExpenseId, expenseData); // after locally updated, send it to backend -> await now not necessary because we dont do anything when the request completed
    } else {
      const id = await storeExpense(expenseData);
      expensesCtx.addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
