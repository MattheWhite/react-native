import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {
  /* or use OBJECT DESTRUCTURING => PrimaryButton({children}) */
  return (
    <View style={styles.buttonOuterContainer}>{/* we have to apply here the text styling, since in RN styling there is NO INHERITANCE */}
      <Pressable style={styles.buttonInnerContainer} android_ripple={{ color: "#da5698" }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8, // adding different spacing left-right then top-bottom
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
