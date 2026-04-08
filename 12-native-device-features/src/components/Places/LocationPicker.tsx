import { StyleSheet, View } from "react-native";
import { getCurrentPositionAsync } from "expo-location";

import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "@/constants/colors";

function LocationPicker() {
  async function verifyPermissions() { // get permission for location

  }

  async function getLocationHandler() {
    const location = await getCurrentPositionAsync(); // can a config object {} passed to the async call -> e.g. accuracy setting
    console.log(location);
  }

  function pickOnMapHandler() {}

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton onPress={getLocationHandler} icon="location">
          Locate User
        </OutlinedButton>
        <OutlinedButton onPress={pickOnMapHandler} icon="map">
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
