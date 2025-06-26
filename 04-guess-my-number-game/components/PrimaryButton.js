import { View, Text } from "react-native";

function PrimaryButton(props) {/* or use OBJECT DESTRUCTURING => PrimaryButton({children}) */
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
}

export default PrimaryButton;
