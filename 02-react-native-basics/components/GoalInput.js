import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput, View } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    // entered text is automatically passed by RN
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(""); // after now executing manually to pass the entered value, we set back to empty string
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal here"
        onChangeText={goalInputHandler}
        value={enteredGoalText} /* add two-way binding since we set back to empty string manually after adding the goal */
      />
      {/* only the pointer passed, no ()parentheses at the end because then when the code is compiled/rendered it would be executed */}
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // flexbox functionality used with this property, learned from Flexbox section, by default React Native uses flexbox on elements
    flexDirection: "row", // default setting is 'column' -> thats why it is displayed below eachother at start
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccc",
    width: "80%",
    marginRight: 8, // no touching between the input and the button
    padding: 8, // placeholder not be on the left edge
  },
});
