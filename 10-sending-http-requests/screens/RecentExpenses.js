import { useContext, useEffect, useState } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
    // const expensesCtx = useContext(ExpensesContext); // making available data from newly created context provider for ExpenseOutput

    const [fetchedExpenses, setFetchedExpenses] = useState([]);

    useEffect(() => { // NEVER TURN THE EFFECT FUNCTION ITSELF INTO ASYNC
      async function getExpenses() { // make a helper function as async
        const expenses = await fetchExpenses();
        setFetchedExpenses(expenses);
      }

      getExpenses();
    }, []);
    
    // const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const recentExpenses = fetchedExpenses.filter((expense) => {
    const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return (expense.date >= date7DaysAgo) && (expense.date <= today); // rule out the future
    });

    return <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 Days' fallbackText="No expenses registered for the last 7 days." />;
}

export default RecentExpenses;