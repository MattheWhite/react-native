import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "@/constants/colors";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { fetchPlaceById } from "../components/util/database";

function PlaceDetails() {
  const { placeId } = useLocalSearchParams<{ placeId: string }>();
  const [place, setPlace] = useState(null);

  function showOnMapHandler() {}

  useEffect(() => {
    async function loadPlace() {
      if (placeId) {
        const data = await fetchPlaceById(placeId);
        setPlace(data);
      }
    }
    loadPlace();
  }, [placeId]);

  if (!place) return <View><Text>Loading...</Text></View>;

  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>address</Text>
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
});
