import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return (
    <Text style={styles.title}>{children}</Text>
  ); /* with object destruction we get the children what is passed inside this component where it is used */
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 35,
    // fontWeight: "bold", since the used custom font is already bold
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
