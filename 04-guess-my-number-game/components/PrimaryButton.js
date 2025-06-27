import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {
  /* or use OBJECT DESTRUCTURING => PrimaryButton({children}) */
  return (
    <Pressable>
      <View style={styles.buttonContainer}>{/* we have to apply here the text styling, since in RN styling there is NO INHERITANCE */}
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8, // adding different spacing left-right then top-bottom
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
