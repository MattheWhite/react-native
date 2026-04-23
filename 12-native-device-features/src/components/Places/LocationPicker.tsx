import { Alert, StyleSheet, View, Text, Image } from "react-native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";
import { useEffect, useState } from "react";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";

import { getAddress, getMapPreview } from "../util/location";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "@/constants/colors";

function LocationPicker({onPickLocation}) { // since it is not a Screen component {navigation} prop can't be retrieved here, instead useNavigation() hook has to be used
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  
  const [pickedLocation, setPickedLocation] = useState();
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions(); // React rule -> hooks only can be used on TOP-LEVEL component funciton
  
  useEffect(() => {
    // const mapPickedLocation = route.params && { // if we already picked and navigated back here route.params truthy and we assign an object | Map.tsx passed the params
    //   lat: route.params.pickedLat,
    //   lng: route.params.pickedLng,
    // };
    
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    async function handleLocationPromise() {
      if (pickedLocation) {
        const address = await getAddress(pickedLocation.lat, pickedLocation.lng);
        onPickLocation({ ...pickedLocation, address: address });
      }
    }
    
    handleLocationPromise();
  }, [pickedLocation, onPickLocation]); // in PlaceForm making pickLocationHandler a constant arrow func. so here this effect won't be reevaluated again when changes smthing

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
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    });
    console.log(location);
  }

  function pickOnMapHandler() {
    // should use your own Google account -> GCP -> Google Maps API Key
    navigation.navigate("Map");
  }

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation){
    locationPreview = <Image style={styles.image} source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)}} />; // due to placeholder API KEY won't appear a map preview
  }

  return (
    <View>
      <View style={styles.mapPreview}>
        {locationPreview}
      </View>
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
    overflow: 'hidden'
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: '100%',
    height: '100%',
    // borderRadius: 4  or overflow: hidden above
  }
});
