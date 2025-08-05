import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }) { // dummy meal data has these fields which we can destruct after we passing it as props in MealsOverviewScreen
  return (
    <View style={styles.mealItem}>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          {/* if the source from the web you have to define the width-height for the image */}
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}minutes</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8 //padding would work here too
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8, //margin would work here too,
    justifyContent: 'center'
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  }
});
