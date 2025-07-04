import { Image, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/colors";
import Title from "../components/ui/Title";

function GameOverScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Game is over!</Text>
      </View>
      <View>
        <Title>Game Over</Title>
        <Image source={require('../assets/images/success.png')} />
      </View>
    </>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.accent500,
  },
});
