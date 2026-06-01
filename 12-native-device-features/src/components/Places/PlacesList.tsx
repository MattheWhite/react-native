import { FlatList, StyleSheet, Text, View } from "react-native";

import PlaceItem from "./PlaceItem";
import { Colors } from "@/constants/colors";
import { router } from "expo-router";

function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet - start adding some!</Text>
      </View>
    );
  }

  const selectPlaceHandler = (id: string | number) => {
    // Navigate to the file app/PlaceDetails.tsx (or whatever your file is named)
    // Pass the ID as a query parameter  ->  could have used here navigation.navigate() here too, but this is the modern way BUT THEN i would have to add a new <Stack.Screen name='PlaceDetails' /> in _layout (which is App.js in react-navigation approach)
    router.push(`/PlaceDetails?placeId=${id}`);
  };

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => ( // or curly braces {} with explicit return statement
        <PlaceItem
          place={item}
          onSelect={selectPlaceHandler} // Pass the handler
       />) // assert the incoming item to 'place' prop
      }
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200
  },
});
