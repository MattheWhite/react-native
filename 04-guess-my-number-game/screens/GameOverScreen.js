import { Image, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";
import Title from "../components/ui/Title";

function GameOverScreen() {
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
      <Text>
        Your phone needed <Text>X</Text> rounds to guess the number<Text>Y</Text>.
      </Text>
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
});
