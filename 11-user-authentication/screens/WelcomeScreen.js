import { StyleSheet, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { AuthContext } from "./store/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState('');

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    // execute this effect right after the component first loaded

    /* on FireBase Realtime Database change the Rules
    from:
      {
        rules: {
          ".read" : "now < 1796515600000" // 2026-12-6
        }
      }
    to:
    {
        rules: {
          ".read" : "auth.uid != null" -> so the incoming token includes a valid uid, otherwise it's locked
        }
      }
    */
    axios.get(
      "https://react-native-11-default-rtdb.firebaseio.com/message.json?auth=" + token, // attach token as query param to call FireBase
    ).then((response) => {
      setFetchedMessage(response.data);
    });
  }, [token]);

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
