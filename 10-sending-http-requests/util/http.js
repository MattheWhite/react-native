import axios from "axios";

const BACKEND_URL = "https://react-native-11-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
  axios.post( // unique ID generated on Firebase for the uploaded data node
    BACKEND_URL + "/expenses.json",// .json suffix is Firebase specific
    expenseData
  );
}

