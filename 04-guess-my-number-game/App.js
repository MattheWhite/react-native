import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

/*
  making screens/ folder for whole page components
  making components/ folder for all the small building block components
*/

export default function App() {
  const [userNumber, setUserNumber] = useState(); // at start will be null/undefined  => implement this hook so we can define a simply rendering/navigation based on its value, without external dependency used

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />; /* passing the pickedNumberHandler to StartGameScreen component */

  if (userNumber) screen = <GameScreen />;
  
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}/* this prop activates on the View element inside ImageBackground built-in component */
        imageStyle={styles.backgroundImage}/* this prop activates directly on the image */
      >
        <SafeAreaView style={styles.rootScreen}> {/* wrapping around the main components so it leaves the notchbar alone but the background stays in place */}
          {screen} {/* set the rendered component above like a navigation */}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1, // needed because View only takes as much space as needed to fit the content into them
  },
  backgroundImage: {
    opacity: 0.15
  }
});
