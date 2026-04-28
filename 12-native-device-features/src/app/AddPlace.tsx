import { Stack } from "expo-router";
import { useNavigation } from "@react-navigation/native";

import PlaceForm from "../components/Places/PlaceForm";

function AddPlace() {
  const navigation = useNavigation();
  
  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces", {
      place: place
    });
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
