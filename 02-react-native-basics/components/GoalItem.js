import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
// Pressable -> makes a component pressable,   OLD: Touchable, TouchableHighlight, etc.  will be deprecated prossibly soon

// create standard React component, modern React don't need anymore "import React from react" !
function GoalItem(props) {
  /*   function deleteGoalHandler() {   implementing .bind() built-in JS funciton which we can setup here the will be called binded function's behavior (like passing parameters to it)
    props.onDeleteGoal(props.id);
  } */

  return (
    <Modal>
      <View style={styles.goalItem}>
        <Pressable
          onPress={props.onDeleteGoal.bind(this, props.id)}
          android_ripple={{ color: "#210664" }}
          style={({ pressed }) => {
            pressed && styles.pressedItem;
          }} /* style can take a function alternatively, this function will be called automatically by Pressable when 'pressed' state changes! You will get the parameter automatically, here we use OBJECT DESTRUCTURING = the same as we would declare: (pressData) => {pressData.pressed} but this way we directly access the property. If pressed we return the pressItem styling, otherwise nothing => this whole declaration only for IOS */
        >
          {/* enabling ripple effect on adnroid. Moving PRESSABLE element inside the View the effect is shown on the whole object not just around it */}
          {/* onPress={deleteGoalHandler} prev. solution, now using .bind() to setup here the called function */}
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8, // outer spacing
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8, // inner spacing
  },
});
