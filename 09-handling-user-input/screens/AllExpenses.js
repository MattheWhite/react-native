import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext); // making available data from newly created context provider for ExpenseOutput
    return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" fallbackText="No registered expenses found." />;
}

export default AllExpenses;