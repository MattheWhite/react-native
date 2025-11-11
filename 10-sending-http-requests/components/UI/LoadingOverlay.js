import { ActivityIndicator, View } from "react-native";

function LoadingOverlay() {
  return (// ActivityIndicator -> built-in RN loading spinner
    <View>
      <ActivityIndicator size={"large"} color="white" />
    </View>
  );
}

export default LoadingOverlay;
