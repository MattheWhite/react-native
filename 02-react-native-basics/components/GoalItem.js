import { StyleSheet, Text, View, Pressable } from "react-native";
// Pressable -> makes a component pressable,   OLD: Touchable, TouchableHighlight, etc.  will be deprecated prossibly soon

// create standard React component, modern React don't need anymore "import React from react" !
function GoalItem(props) {
  /*   function deleteGoalHandler() {   implementing .bind() built-in JS funciton which we can setup here the will be called binded function's behavior (like passing parameters to it)
    props.onDeleteGoal(props.id);
  } */

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteGoal.bind(this, props.id)}
        android_ripple={{ color: "#dddddd" }}
      >{/* enabling ripple effect on adnroid. Moving PRESSABLE element inside the View the effect is shown on the whole object not just around it */}
        {/* onPress={deleteGoalHandler} prev. solution, now using .bind() to setup here the called function */}
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8, // outer spacing
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
      color: "white",
      padding: 8, // inner spacing
  },
});
