import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) { // this prop 'navigation' is provided only for components which are Stack.Screen components
  // move every function inside the component function so everyone access the props, no .bind() needed

  // optional, outsource here for cleaner code
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview"); // provided by React Navigation, target page name is added in Stack.Screen screen component
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  ); /* keyExtractor automatically gets item wrapped in itemData, numColumns default is one, with more we can organize the FlatList items into columns -> FlatList makes it scrollable */
}

export default CategoriesScreen;
