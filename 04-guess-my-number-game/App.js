import { StyleSheet, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from "./screens/StartGameScreen";

/*
  making screens/ folder for whole page components
  making components/ folder for all the small building block components
*/

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb52f",
    flex: 1, // needed because View only takes as much space as needed to fit the content into them
  },
});
