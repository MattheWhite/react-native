import { View, StyleSheet } from "react-native";

import Title from "../components/ui/Title";
import { useState } from "react";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min; // adding min so can't be 0 worst case scenario

  if (rndNum === exclude) {
    // defending that the device can't win at start
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber); // 100 because the upper boundary is excluded, userNumber so the device can't guess the inputNumber at rendering
  const [currentGuess, setCurrentGuess] = useState();

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
