import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {
  /* or use OBJECT DESTRUCTURING => PrimaryButton({children}) */
  return (
    <Pressable>
      <View style={styles.container}>
        <Text>{props.children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#72063c",
    borderRadius: 280,
    paddingVertical: 8, // adding different spacing left-right then top-bottom
    paddingHorizontal: 16,
    elevation: 2,
  },
});
