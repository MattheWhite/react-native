import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton(props) {
  /* or use OBJECT DESTRUCTURING => PrimaryButton({ children, onPress }) => onPress is my special defined generic function so i can define what function would be executed onPress action */

  function pressHandler() {
    props.onPress();
  }

  return (
    <View style={styles.buttonOuterContainer}>
      {/* we have to apply here the text styling, since in RN styling there is NO INHERITANCE */}
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.iOSPressedStyling, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        } // automatically called on press action and passed the 'pressed' boolean data
        android_ripple={{ color: Colors.primary400 }}
        onPress={pressHandler} // or here just directly connect to my special onPress as onPress={onPress} if on top i would use OBJECT DESTRUCTION, now i'd have to use onPress={props.onPress}     WATCH OUT THE COMMENT SYNTAX!!!  IT CAN CAUSE AN "Text strings must be rendered within a <Text> component" ERROR    here e.g.: using the /**/ not right  -> but this time the error was raised in App.js due to the {screen} rendering navigation code part, because i left spaces around this line and simply that caused this error
      >
        <Text style={[styles.buttonText]}>{props.children}</Text>
        {/* styles CAN RECEIVE ARRAY of styles, which all will be applied | ARROW FUNCTION which will be executed */}
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8, // adding different spacing left-right then top-bottom
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  iOSPressedStyling: {
    opacity: 0.75,
  },
});
