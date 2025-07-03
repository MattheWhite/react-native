import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  /* automatically gets input text on every keystroke because we binded to onChangeText prop, not onChange simply */
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  /* shown if you try enter an empty value or minus value */
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [
          { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
        ] /* configuring the Button displayed, the style can be: destructive, cancel, default, onPress we can pass a pointer which will be executed */
      );
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad' /* even with number-pad the received value will ALWAYS be STRING */
        keyboardAppearance='dark'
        autoCapitalize='none' /* this 2 props only added for demonstration purpose, here no effect */
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      {/* determine with keyboardType to open a number input keyboard */}
      <View style={styles.buttonsContainer}>
        {/* every View constructs a new flexbox container */}
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,  element takes as much space as possible
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // box shadow effect on Android ONLY  |  can't be transformed into a Native element which IOS can understand too  => use shadow...  properties for IOS
    /*  
    ONLY FOR IOS
    
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 1
*/
  },
  numberInput: {
    height: 60,
    width: 60,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8, // adds the same space on the top and below to the element
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
