import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function InstructionText({ children, style }) { // styling inheritance implementation in RN, style prop of components accept an array[] too! the array containing the style objects are evaluated from left-to-right, so the last styles can overwrite the earlier objects if there is overlapping
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
