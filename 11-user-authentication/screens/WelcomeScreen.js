import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState('');

  useEffect(() => {
    // execute this effect right after the component first loaded
    axios.get(
      "https://react-native-11-default-rtdb.firebaseio.com/message.json",
    ).then((response) => {
      setFetchedMessage(response.data);
    });
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
