import { StyleSheet, Text, View, Pressable } from "react-native";
// Pressable -> makes a component pressable,   OLD: Touchable, TouchableHighlight, etc.  will be deprecated prossibly soon

// create standard React component, modern React don't need anymore "import React from react" !
function GoalItem(props) {
  function deleteGoalHandler() {
    props.onDeleteGoal();
  }

  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8, // outer spacing
    padding: 8, // inner spacing
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
