import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpense({ route, navigation }) { // route, navigation props we automatically get here since it is a component which loaded as a screen
  const editedExpenseId = route.params?.expenseId; // ? -> JS checks if that property exists, if not it won't 'drill' into it further more
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => { // useLayoutEffect hook to avoid flickering
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return <Text>Manage Expense Screen!</Text>;
}

export default ManageExpense;
