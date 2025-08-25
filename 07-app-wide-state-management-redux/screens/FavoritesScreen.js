import { StyleSheet, View, Text } from "react-native";
// import { useContext } from "react";
import { useSelector } from "react-redux";

import MealsList from "../components/MealsList/MealsList";
// import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  // const favoriteMealsContext = useContext(FavouritesContext);
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

  // const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id));
  const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
    );
  }
  
  return <MealsList displayedMeals={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});