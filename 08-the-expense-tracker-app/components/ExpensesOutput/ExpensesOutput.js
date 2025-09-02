import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES =
  [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2024-12-19"),
    },
    {
      id: "e2",
      description: "A pair of trousers",
      amount: 89.99,
      date: new Date("2025-01-05"),
    },
    {
      id: "e3",
      description: "Some bananas",
      amount: 5.99,
      date: new Date("2025-1-19"),
    },
    {
      id: "e4",
      description: "Book",
      amount: 14.99,
      date: new Date("2024-9-26"),
    },
    {
      id: "e5",
      description: "Another Book",
      amount: 17.59,
      date: new Date("2025-2-26"),
    },
    {
      id: "e6",
      description: "Porsche 911 992 GT3-R Cup II",
      amount: 379.990,
      date: new Date("2025-3-6"),
    },
  ] >
  function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
      <View>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
        <ExpensesList />
      </View>
    );
  };

export default ExpensesOutput;
