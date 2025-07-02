import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {/* automatically gets input text on every keystroke because we binded to onChangeText prop, not onChange simply */
    setEnteredNumber(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad" /* even with number-pad the received value will ALWAYS be STRING */
        keyboardAppearance="dark"
        autoCapitalize="none" /* this 2 props only added for demonstration purpose, here no effect */
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      {/* determine with keyboardType to open a number input keyboard */}
      <View style={styles.buttonsContainer}>
        {/* every View constructs a new flexbox container */}
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={numberInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,  element takes as much space as possible
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4, // box shadow effect on Android ONLY  |  can't be transformed into a Native element which IOS can understand too  => use shadow...  properties for IOS
    /*  
    ONLY FOR IOS
    
    shadowColor: "black",
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 1
*/
  },
  numberInput: {
    height: 60,
    width: 60,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8, // adds the same space on the top and below to the element
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
