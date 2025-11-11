import { useContext, useEffect, useState } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);// true -> we initially always will be fetching data
  
  const expensesCtx = useContext(ExpensesContext); // making available data from newly created context provider for ExpenseOutput

  // const [fetchedExpenses, setFetchedExpenses] = useState([]); -> modify data handling back to context to avoid redundant http requests, e.g. adding an expense no sense to send to the server than fetching it

  useEffect(() => { // NEVER TURN THE EFFECT FUNCTION ITSELF INTO ASYNC
    async function getExpenses() { // make a helper function as async
      setIsFetching(true);  
      const expenses = await fetchExpenses();
      // setFetchedExpenses(expenses);
      setIsFetching(false); // after we await the expense fetching
      expensesCtx.setExpenses(expenses);
    }

    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }
  
  // const recentExpenses = fetchedExpenses.filter((expense) => {
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
  const today = new Date();
      const date7DaysAgo = getDateMinusDays(today, 7);
      return (expense.date >= date7DaysAgo) && (expense.date <= today); // rule out the future
  });

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 Days' fallbackText="No expenses registered for the last 7 days." />;
}

export default RecentExpenses;