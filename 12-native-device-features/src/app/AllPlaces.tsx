import { useEffect, useState } from "react";
import { useIsFocused, useRoute } from "@react-navigation/native";

import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../components/util/database";

function AllPlaces() {
  const route = useRoute();
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPlaces() {
      await fetchPlaces().then(async (result) => {
        console.log(result);
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
