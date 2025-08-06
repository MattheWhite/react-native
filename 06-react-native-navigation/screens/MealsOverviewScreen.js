import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native"; // hook - alternative way for 'route' parameter

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ navigation, route }) {
  // const routeObj = useRoute(); - then routeObj.params . . . | this holds additional routing information
  const categoryId = route.params.categoryId; // extracts params from the passed Object in Stack.Screen

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0; // filter if meal contains the category
  });

  /*  

    MAINLY PROBLEM ON iOS
  
    INSTEAD useEffect() which has a latency because first it waits the Component's function to finish, then will be executed
      -->>  USE: useLayoutEffect()  which has no latency, won't wait the Component's funtion to finish, runs simultaniously with it

    useEffect(() => {
      const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
    
      navigation.setOptions({ // outsource DYNAMIC configurations from App.js to here
        title: categoryTitle
      });
    }, [categoryId, navigation]);
  */ 
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
    
    navigation.setOptions({ // outsource DYNAMIC configurations from App.js to here
      title: categoryTitle
    });
  }, [categoryId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    };
    return (
      <MealItem {...mealItemProps} /> /* syntax to distribute all the properties of this object as props to this component | keys->prop names, values->values */
    );
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
