import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput, View, Modal } from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      {/* visible and animationType is Modal properties, props.visible is mine */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal here"
          onChangeText={goalInputHandler}
          value={
            enteredGoalText
          } /* add two-way binding since we set back to empty string manually after adding the goal */
        />
        <View style={styles.buttonContainer}>
          {/* only the pointer passed, no ()parentheses like:addGoalHandler() at the end because then when the code is compiled/rendered it would be executed */}
          <View style={styles.button}>
            {/* wrapping Buttons around with View so we can styling - default Buttons can NOT be styled */}
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button} >
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
      {/* if you move this over the View which contains the Buttons i think looks dope */}
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // flexbox functionality used with this property, learned from Flexbox section, by default React Native uses flexbox on elements
    // flexDirection: "row", // default setting is 'column' -> thats why it is displayed below eachother at start
    justifyContent: "center", // space-between previously
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccc",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccc",
    width: "100%",
    // marginRight: 8, // no touching between the input and the button
    padding: 8, // placeholder not be on the left edge
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100, // using now fixed pixel number instead of '30%'
    marginHorizontal: 8,
  },
});
