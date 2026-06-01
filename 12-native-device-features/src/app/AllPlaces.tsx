import { useEffect, useState } from "react";
import { useIsFocused, useRoute } from "@react-navigation/native";

import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../components/util/database";
import { Place } from "@/models/Place";

function AllPlaces() {
  const route = useRoute();
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      await fetchPlaces().then(async (result) => {
        console.log(' =====================   FETCHED DATA   ===================== \n', result);
        const places: Place[] = [];
        for (const dataPoint of result) {
          places.push(new Place(dataPoint.title, dataPoint.imageUri, {address: dataPoint.address, lat: dataPoint.lat, lng: dataPoint.lng}, dataPoint.id));
        }
        setLoadedPlaces(places);
      });
    }
    if (isFocused /* && route.params */) {
      loadPlaces();
      //setLoadedPlaces(currentPlaces => [...currentPlaces, route.params.place]); // route.params.place -> because in AddPlace we send the data on this field
    }
  }, [isFocused, /* route */]);
  
  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
