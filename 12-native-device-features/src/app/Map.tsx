import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet } from "react-native";
import { useLayoutEffect, useState } from "react";
import IconButton from "../components/UI/IconButton";

function Map({navigation}) { // here we can use navigation prop, since this is a screen component
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    // console.log(event);
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  }

  function savePickedLocationHandler() {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked",
        "You have to pick a location (by tapping on the map) first!",
      );
      return;
    }

    navigation.navigate("AddPlace", {  // RN automatically detects we came from this component and handles it well
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng, 
    }); 
  }

  useLayoutEffect(() => { // run code after the first initialization of this DOM element
    navigation.setOptions({
      headerRight: ({tintColor}) => <IconButton icon="save" size={24} color={tintColor} onPress={savePickedLocationHandler} />
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && ( // render dynamically if there is a selectedLocation
        <Marker
          title="Picked location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
