import { View, Text, StyleSheet } from "react-native";

import Input from "./Input";
import { useState } from "react";

function ExpenseForm() {
    const [amountValue, setAmountValue] = useState(''); // when you fetch a value as input ALWAYS GET A STRING!!! Even if you provide a number, you handle a string technically, thats why let a str be the initial value
    
  function amountChangedHandler(enteredValue) { // because we connect this to onChangeText, RN will automatically provide the entered value as a param, naming is optional
    setAmountValue(enteredValue);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>{/* move this 2 input element into one row */}
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangedHandler,
            value: amountValue // two-way binding
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect: false // default is true -> can be annoying with email input fields for example
          // autoCapitalize: 'none'
        }}
      />
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
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign:'center'
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
