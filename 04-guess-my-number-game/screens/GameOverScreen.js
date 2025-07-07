import { Image, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) { /* we want to expect here datas from App component */
  return (
    /* <View style={styles.container}>
        <Text style={styles.text}>Game is over!</Text>
      </View> */

    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      {/* A Text component should NOT wrap a View container but another Text component can be wrapped  =>  IMPORTANT: the text affected/specific styling values are passed to the nested Text component from the parent Text component! It's still not inheritance, simply just how nested Text components work */}
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number<Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  //   container: {   previously used
  //     flex: 1,
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.accent500,
  },
  imageContainer: {
    // borderRadius should be half of the width and height value, thats how we create a square and then round it for a circle
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    // the percentage always refer to the container which contains the image in RN!
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
});
