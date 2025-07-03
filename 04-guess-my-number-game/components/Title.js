import { StyleSheet, Text } from "react-native";

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
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
