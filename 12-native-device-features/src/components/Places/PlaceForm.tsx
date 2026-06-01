import { Colors } from "@/constants/colors";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import Button from '@/src/components/UI/Button';
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import { Place } from "@/models/Place";

function PlaceForm({onCreatePlace}) {
  const [enteredTitle, setEnteredTitle] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }
  
  function takeImageHandler(imageUri) {
    setSelectedImage(imageUri);
  }

  const pickLocationHandler = useCallback((location) => { // useCallback() will return a memoized version of the callback that only changes if one of the inputs has changed.
    setPickedLocation(location);
  }, []);

  function savePlaceHandler() {
    const placeData: Place = new Place(enteredTitle ?? 'TEST_TITLE_ifNull', selectedImage ?? 'file:///data/user/0/host.exp.exponent/cache/ImagePicker/NOTEXISTING_TEST_URI.jpeg"', pickedLocation  ?? {lat: 420, lng: 69, address: 'dummy address without selected anything'} );
    onCreatePlace(placeData);
    console.log(enteredTitle)
    console.log(selectedImage)
    console.log(pickedLocation)
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          style={styles.input}
        />
        <ImagePicker onTakeImage={takeImageHandler} />
        <LocationPicker onPickLocation={pickLocationHandler} />
        <Button onPress={savePlaceHandler} >Add Place</Button>
      </View>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
