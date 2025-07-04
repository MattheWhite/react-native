import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) { // children arrives from between this component's opening and closing tags
  return (
    <View style={styles.container}>{/* extra View weapper needs for iOS */}
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    // fontWeight: "bold",
    fontFamily: 'open-sans-bold'
  },
});
