import { Alert, StyleSheet, View } from "react-native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";

import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "@/constants/colors";

function LocationPicker() {
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions(); // React rule -> hooks only can be used on TOP-LEVEL component funciton

  async function verifyPermissions() { // get permission for location
    if (locationPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app.",
      );
      return false;
    }
    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

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
