import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        keyboardAppearance="dark"
        autoCapitalize="none"/* this 2 props only added for demonstration purpose, here no effect */
        autoCorrect={false}
      />
      {/* determine with keyboardType to open a number input keyboard */}
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,  element takes as much space as possible
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#72063c",
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
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8, // adds the same space on the top and below to the element
    fontWeight: "bold",
    textAlign: "center",
  },
});
