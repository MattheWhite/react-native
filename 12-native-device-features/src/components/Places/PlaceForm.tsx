import { Colors } from "@/constants/colors";
import { useCallback, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

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
    if (!enteredTitle || !selectedImage || !pickedLocation) {
      Alert.alert('Error', 'Please fill in all fields (Title, Image, and Location). Otherwise placeholders will be added.');
      console.log('Entered data: ', enteredTitle, selectedImage, pickedLocation);
    }
    
    const placeData: Place = new Place(enteredTitle ?? 'TEST_TITLE_ifNull', selectedImage ?? 'file:///NOTEXISTING_TEST_URI_ifNull.jpeg', pickedLocation  ?? {lat: 420, lng: 69, address: 'DUMMY_ADDRESS_ifNull'} );
    console.log('Sending to DB:', placeData); // Verify data here first
    onCreatePlace(placeData);
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
