import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min; // adding min so can't be 0 worst case scenario

  if (rndNum === exclude) {
    // defending that the device can't win at start
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100; // 100 because the upper boundary is excluded, userNumber so the device can't guess the inputNumber at rendering

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber); // here we hardcode so the final guess won't crack the code on rerender, we only need this for once anyway
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => { // use this effect and executes if one of the passed dependency/state is changed
    if (currentGuess === userNumber) {
        onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]); // simple rule, all the variables and functions which are used should be passed here to watch
  
  function nextGuessHandler(direction) {
    // 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" }, // no need for onPress, because we just want to warn the user
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess; // because we have to guess lower
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
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
