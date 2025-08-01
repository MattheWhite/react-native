import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native"; // hook - alternative way for 'route' parameter

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ navigation, route }) {
  // const routeObj = useRoute(); - then routeObj.params . . . | this holds additional routing information
  const categoryId = route.params.categoryId; // extracts params from the passed Object in Stack.Screen

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0; // filter if meal contains the category
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      {/* <Text>Meals Overview Screen - {categoryId}</Text> */}
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
