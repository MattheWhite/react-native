import { StyleSheet, Text } from "react-native";

import Colors from "../constants/colors";

function Title({ children }) {
  return (
    <Text style={styles.title}>{children}</Text>
  ); /* with object destruction we get the children what is passed inside this component where it is used */
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
