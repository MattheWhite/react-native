import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";

import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "@/constants/colors";
import { fetchPlaceById } from "../components/util/database";

function PlaceDetails() {
  // This will correctly receive the ID sent via router.push(`/PlaceDetails?placeId=${id}`)
  const { placeId } = useLocalSearchParams<{ placeId: string }>();
  const [place, setPlace] = useState(null);
  const navigation = useNavigation();

  function showOnMapHandler() {
    navigation.navigate('Map'); // here we could continue to hide the save button on open a Place -> modify Map.tsx but here stops the project
  }

  useEffect(() => {
    async function loadPlace() {
      if (placeId) {
        const data = await fetchPlaceById(placeId);
        setPlace(data);
      }
    }
    loadPlace();
  }, [placeId]);

  // Update header title as soon as 'place' data is available
  useLayoutEffect(() => {
    if (place?.title) {
      navigation.setOptions({ title: place.title });
    }
  }, [navigation, place?.title]);

  if (!place)
    return (
      <View style={styles.fallBack}>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  fallBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
