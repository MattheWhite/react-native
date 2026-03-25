import { Stack } from "expo-router";

import PlaceForm from "../components/Places/PlaceForm";

function AddPlace() {
  return ( // IMPLEMENT ANOTHER WAY TO CONFIGURE A COMPONENT AND IT'S PROPS AS A ROUTE
    <>
      <Stack.Screen
        // name="AddPlace" -> here no need for name prop, only if it'd be in Layout route
        options={{
          title: "Add a new Place",
        }}
      />
      <PlaceForm />
    </>
  );
}

export default AddPlace;
