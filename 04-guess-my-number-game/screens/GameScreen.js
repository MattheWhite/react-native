import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import GuessLogItem from "../components/game/GuessLogItem";

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
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    // use this effect and executes if one of the passed dependency/state is changed
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]); // simple rule, all the variables and functions which are used should be passed here to watch

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []); // adding an empty array of dependencies => this way the effect function only executes for the first time this component is evaluated | updates won't affect  (we could easily set back the min and max boundaries in the effect above after we called onGameOver()... this is just simply another solution for the problem)

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
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]); // since we update a state based on the prev. state, we use the function form for updating
  }

  const GuessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
              {/* using ICONS from expo library */}
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <GuessLogItem roundNumber={GuessRoundsListLength - itemData.index} guess={itemData.item} />}/* renderItem will automatically wrap the items of the array! this objects contains item as the value | we receive the index with itemData TOO automatically by RN FlatList !!! */
          keyExtractor={(item) => item}/* also will be executed as the renderItem function, item itself is a number in this case which is a unique number */
        />
        {/*  {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)}  => Using FlatList if the array overlays the whole screen...  for key the guessNumber will be okay because we can't guess twice the same number */}
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
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
