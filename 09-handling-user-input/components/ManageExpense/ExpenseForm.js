import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import Input from "./Input";
import Button from "../UI/Button";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit }) {
  // const [amountValue, setAmountValue] = useState(""); // when you fetch a value as input ALWAYS GET A STRING!!! Even if you provide a number, you handle a string technically, thats why let a str be the initial value
  // avoiding multiple state slicing for every input field
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: ''
  });

  /* function amountChangedHandler(enteredValue) {// because we connect this to onChangeText, RN will automatically provide the entered value as a param, naming is optional
    setAmountValue(enteredValue);
  } */
  // reusable generic input change handler method with one state object above!
  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((currentInputValues) => {// can pass a function for a state update function -> when we rely on the prev. state, we can reveive this way! BEST PRACTICE
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue, // [id]  -> target a property dynamically, JS syntax
      };
    });
  }

  function submitHandler() {}

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>{/* move this 2 input element into one row */}
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, 'amount'), /// this parameter is standardly the first one passed for .bind() built-in, does NOT matter here but has to passed! enteredValue is still passed by RN automatically
            value: inputValues.amount, // value: amountValue,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect: false // default is true -> can be annoying with email input fields for example
          // autoCapitalize: 'none'
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode={'flat'} onPress={onCancel}>Cancel</Button>
        <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
});
