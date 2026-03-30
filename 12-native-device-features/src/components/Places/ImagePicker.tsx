import { Alert, Button, Image, View, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker"; // ✅ Updated import
import { useState } from "react";
import { Colors } from "@/constants/colors";

function ImagePickerComponent() {
  const [pickedImage, setPickedImage] = useState("");

  // these additional permission requester and handler code needs only for iOS   ----------------
  const [cameraPermissionInformation, requestPermission] =
    ImagePicker.useCameraPermissions();

  async function verifyPermissions() {
    if (
      cameraPermissionInformation?.status ===
      ImagePicker.PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (
      cameraPermissionInformation?.status ===
      ImagePicker.PermissionStatus.DENIED
    ) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app.",
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    // permission requester block end -----------------------------------------------------------

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.assets[0].uri);
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = (
      <Image
        source={{ uri: pickedImage }}
        style={styles.image}
      />
    );
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePickerComponent;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
