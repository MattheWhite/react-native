import { Stack } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../components/util/database";

function AddPlace() {
  const navigation = useNavigation();
  
  async function createPlaceHandler(place) {
    try { // Verify AddPlace.tsx handles errors Ensure your createPlaceHandler catches the error so the app doesn't crash silently
      await insertPlace(place);
      navigation.navigate("AllPlaces" /*, { place: place }*/);
    } catch (error) {
      Alert.alert(
        "Database Error",
        "Could not add place. Check console for details.",
      );
      console.error(error);
    }
  }
  
  return ( // IMPLEMENT ANOTHER WAY TO CONFIGURE A COMPONENT AND IT'S PROPS AS A ROUTE
    <>
      <Stack.Screen
        // name="AddPlace" -> here no need for name prop, only if it'd be in Layout route
        options={{
          title: "Add a new Place",
        }}
      />
      <PlaceForm onCreatePlace={createPlaceHandler} />
    </>
  );
}

export default AddPlace;
