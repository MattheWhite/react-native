import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ navigation, route }) {
  const categoryId = route.params.categoryId; // extracts params from the passed Object in Stack.Screen

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
