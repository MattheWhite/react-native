import { View } from "react-native";

function ExpensesSummary({ expenses, periodName }) {
    const expensesSum = expenses.reduce((sum, expense) => { // reduce() -> built-in method, allows to combine multiple values in an array into a single value | automatically receives: current value, current item 
      return sum + expense.amount;
    }, 0); // second argument is the starting value
    
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>{/* toFixed(2) built-in -> only display 2 decimals */}
    </View>
  );
}

export default ExpensesSummary;
