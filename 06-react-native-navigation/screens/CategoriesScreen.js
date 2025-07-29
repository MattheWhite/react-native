import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


// optional, outsource here for cleaner code
function renderCategoryItem(itemData) {
  function pressHandler() {}
  
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
  );
}

function CategoriesScreen() {
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
