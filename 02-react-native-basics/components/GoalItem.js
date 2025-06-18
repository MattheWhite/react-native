import { StyleSheet, Text, View } from "react-native";

// create standard React component, modern React don't need anymore "import React from react" !
function GoalItem() {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{}</Text>
    </View>
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
