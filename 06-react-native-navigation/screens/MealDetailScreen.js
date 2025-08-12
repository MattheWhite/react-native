import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "./MealDetail/Subtitle";
import List from "./MealDetail/List";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      // here we can use the same options as in App.js where we define a Screen
      headerRight: () => {
        return <Button title='TAP ME' />
      }
    });
  }, []);

  return (
    <ScrollView style={styles.rootContainer}>
      {/* if it is image from web, we need to use the object  =>  AND WE HAVE TO SET THE WIDTH-HEIGTH!!! for React Native so it can calculate with it */}
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 22
  },
  image: {
    width: "100%", // 100% of available space of parent component
    height: 320,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: "88%",
  },
});
