import { useContext } from "react";

import MealsList from "../components/MealsList/MealsList";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoriteMealsContext = useContext(FavouritesContext);

  const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id));
  
  return <MealsList displayedMeals={favoriteMeals} />;
}

export default FavoritesScreen;
