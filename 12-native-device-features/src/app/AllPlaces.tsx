import { useEffect, useState } from "react";

import PlacesList from "../components/Places/PlacesList";
import { useIsFocused, useRoute } from "@react-navigation/native";

function AllPlaces() {
  const route = useRoute();
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces(currentPlaces => [...currentPlaces, route.params.place]); // route.params.place -> because in AddPlace we send the data on this field
    }
  }, [isFocused, route]);
  
  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
