import { StyleSheet, Text, View, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) { // children arrives from between this component's opening and closing tags
  return (
    <View style={styles.container}>{/* extra View weapper needs for iOS */}
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;
// we can receive the Device's dimension values before the runApplication is called so before the app is starts | 'screen' OR 'window' => only matters for Android, on iOS no difference, on Android 'screen' means the entire available space including the status bar on top, 'window' only the usable space without the status bar on top

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 400 ? 12 : 24, // dynamic fontsize, padding and margin according to the device size
    margin: deviceWidth < 400 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 400? 28 : 36,
    // fontWeight: "bold",
    fontFamily: 'open-sans-bold'
  },
});
