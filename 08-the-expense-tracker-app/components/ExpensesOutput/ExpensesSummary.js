import { FlatList, View } from "react-native";

function ExpensesSummary({ expenses, periodName }) {
    const expensesSum = expenses.reduce((sum, expense) => {});
    
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>$9999</Text>
    </View>
  );
}

export default ExpensesSummary;
