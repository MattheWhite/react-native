import { StyleSheet, Text } from "react-native";

function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    return <Text>This is the Meal Detail Screen - {mealId}</Text>;
}

export default MealDetailScreen;

const styles = StyleSheet.create({});
