import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

/*
  making screens/ folder for whole page components
  making components/ folder for all the small building block components
*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
