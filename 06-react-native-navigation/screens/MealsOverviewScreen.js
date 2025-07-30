import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native"; // hook - alternative way for 'route' parameter

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ navigation, route }) {
  // const routeObj = useRoute(); - then routeObj.params . . . | this holds additional routing information
  const categoryId = route.params.categoryId; // extracts params from the passed Object in Stack.Screen

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
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
