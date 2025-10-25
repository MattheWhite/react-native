import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import IconButton from "../components/ExpensesOutput/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ExpensesOutput/UI/Button";

// route, navigation props we automatically get here since it is a component which loaded as a screen
function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId; // ? -> JS checks if that property exists, if not it won't 'drill' into it further more
  const isEditing = !!editedExpenseId;

  // useLayoutEffect hook to avoid flickering
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {}

  function cancelHandler() {}

  function confirmHandler() {}

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button mode={'flat'} onPress={cancelHandler}>Cancel</Button>
        <Button onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
});
