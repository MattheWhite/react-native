import { View, Text, TextInput } from "react-native";

function Input({ label, textInputConfig }) { // instead a never ending list of props, use an object with the appropriate keys and simply pass it, automatically will be evaluated
  return <View>
    <Text>{label}</Text>
    <TextInput {...textInputConfig} /> {/* keyboardType={type} maxLength={maxLength}  -> instead we continue add more and more props, we simply USE SPREAD OPERATOR */}
  </View>;
}

export default Input;
