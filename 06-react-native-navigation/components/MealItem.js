import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) { // dummy meal data has these fields which we can destruct after we passing it as props in MealsOverviewScreen
  const navigation = useNavigation(); // we need this hook, because this component is not registered as a Screen in Stack.Navigation but needs the route, navigation objects for navigation just like MealsOverviewScreen does (gets exactly the same shaped Object with this hook)

  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      // inside this object you can register any key-value pairs to passing to navigate as params object
      mealId: id // expecting above as an incoming value
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#938de6' }}
        style={({ pressed }) => pressed ? styles.buttonPressed : null} // only need this for iOS
        onPress={selectMealItemHandler}
        >
        <View style={styles.innerContainer}>{/* this styling step only needs for iOS, so shadow and overflow for borderRadius are on different View container */}
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
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // top corners to be rounded on iOS too!
    backgroundColor: 'white',
    elevation: 4,
    
    // shadows for iOS
    shadowColor: 'black',
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
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
