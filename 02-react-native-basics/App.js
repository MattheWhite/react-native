import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/* 
Outdated package.json
Fix:  1. step:  ncu -u
      2. step: npm i
      3. step: npm start > Press a (for Android)
        on the emulated device Press Ctrl + M  to open developer menu
*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
