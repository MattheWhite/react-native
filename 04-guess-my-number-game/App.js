import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";

/*
  making screens/ folder for whole page components
  making components/ folder for all the small building block components
  install expo-font:  expo install expo-font
  install expo-app-loading:  expo install expo-app-loading to show a loading 'splash' screen while the app loads the fonts
*/

export default function App() {
  const [userNumber, setUserNumber] = useState(); // at start will be null/undefined  => implement this hook so we can define a simply rendering/navigation based on its value, without external dependency used
  const [gameIsOver, setGameIsOver] = useState(true); // initially the game is not started

  const [fontsLoaded] = useFonts({ // Load a map of fonts at runtime, has to include the project, as a hook, it returns a value, a boolean if loaded
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  function pickedNumberHandler(pickedNumber) {
    // this 2 state update batched together so the component will be only rerendered once => React specific
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }
  
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />; /* passing the pickedNumberHandler to StartGameScreen component */

  if (userNumber) screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;

  if (gameIsOver && userNumber) screen = <GameOverScreen />;
  
  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}/* this prop activates on the View element inside ImageBackground built-in component */
        imageStyle={styles.backgroundImage}/* this prop activates directly on the image */
      >
        {/* wrapping around the main components so it leaves the notchbar alone but the background stays in place */}
        <SafeAreaView style={styles.rootScreen}>
          {screen}{/* we set the rendered component dynamically like a navigation happen, WATCH OUT for spaces it can cause ERROR */}
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
