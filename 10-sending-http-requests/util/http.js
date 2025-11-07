import axios from "axios";

const BACKEND_URL = "https://react-native-11-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) { // now returnes a Promise
  const response = await axios.post( // unique ID generated on Firebase for the uploaded data node
    BACKEND_URL + "/expenses.json",// .json suffix is Firebase specific
    expenseData
  );
  const id = response.data.name; // holds the Firebase generated id in name field
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");
// console.log(response.data);
  const expenses = [];
  for (const key in response.data) {
    if (!Object.hasOwn(response.data, key)) continue;
    const element = response.data[key];
    const expenseObj = {
      id: key, // this is the unique ID Firebase generates for the entry
      amount: element.amount,
      date: new Date(element.date),
      description: element.description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export async function updateExpense(id, expenseData) {
  axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}
