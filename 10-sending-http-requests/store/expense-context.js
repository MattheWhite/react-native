import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
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
    amount: 379.99,
    date: new Date("2026-3-6"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) { // state, action -> received automatically provided by RN
  switch (action.type) { // the dispatched data incoming into this reducer
    case "ADD":
      // const id = Date.now().toString() + Math.random().toString(); // new Date() -> gives back an actual Timestamp object, Date.now() -> gives back a number presenting the milliseconds  -> Firebase creates a unique ID for us
      // return [{ ...action.payload, id: id }, ...state];
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse(); // reverse() -> built-in JS, because Firebase puts the recently added expense at the end
      return inverted;
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id); // we know the payload has an id attribute because we see in line 77 what we pass through dispatch call
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []); // passing DUMMY_EXPENSES as the default value in case the first time this reducer executed, as an initial value | then it will get the existed state

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData }); // type because we extract action.type in expensesReducer switch-case | the value we dispatch here is the 'action' parameter for expensesReducer what is made available by RN
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
