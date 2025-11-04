import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

// route, navigation props we automatically get here since it is a component which loaded as a screen
function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  
  const editedExpenseId = route.params?.expenseId; // ? -> JS checks if that property exists, if not it won't 'drill' into it further more
  const isEditing = !!editedExpenseId;

  // useLayoutEffect hook to avoid flickering
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack(); // goBack() is built-in, equivalent to back button press
  }

  function cancelHandler() {
    navigation.goBack();
  }

/*
  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, { description: 'Porsche Taycan Turbo GT Sport Turismo', amount: 198000, date: new Date() });
    } else {
      expensesCtx.addExpense({ description: 'Porsche 992 911 Turbo S', amount: 219000, date: new Date() });
    }
    navigation.goBack();
  } */

  return (
    <View style={styles.container}>
      <ExpenseForm submitButtonLabel={isEditing ? 'Update' : 'Add'} onCancel={cancelHandler} />
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
    backgroundColor: GlobalStyles.colors.primary800
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
});
