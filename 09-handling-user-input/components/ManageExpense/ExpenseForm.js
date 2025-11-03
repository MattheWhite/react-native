import { View } from "react-native";

import Input from "./Input";

function ExpenseForm() {
  function amountChangedHandler() {}

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input label="Date" textInputConfig={{
        placeholder: 'YYYY-MM-DD',
        maxLength: 10,
        onChangeText: () => {}
      }} />
      <Input label="Description" textInputConfig={{
        multiline: true,
        // autoCorrect: false // default is true -> can be annoying with email input fields for example
        // autoCapitalize: 'none'
      }} />
    </View>
  );
}

export default ExpenseForm;
