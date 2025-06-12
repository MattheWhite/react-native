import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'; // works on every device environment
// import { Button } from 'react-native-web'; -> on Android won't work

/* 
Outdated package.json
Fix:  1. step: ncu -u
      2. step: npm i
      3. step: npm start > Press a (for Android)
        on the emulated device Press Ctrl + M  to open developer menu
*/

export default function App() { // this is the root component what expo will export and render as the App automatically
  return (
    <View style={styles.container}>{/* equivalent to <div> BUT only can contain other components as a box to display -> cannot contain texts */}
      <View>{/* nested Component */}
        <Text style={styles.text}>Another piece of text</Text>
        <Text style={styles.text}>Another piece of text</Text>
      </View>
      <Text style={{margin: 16/* VSC will autocomplete which attributes can be specified for the Component, margin expects a number of pixel */,
        // can comment this way too
        borderWidth: 6, borderStyle: 'solid', borderColor: 'salmon', padding: 16}}>{/* rarely the best solution for styling, USE Object based -> reusable, completely separate RN code from styling code */}
          Hello World!!!!
      </Text>{/* texts has to be included inside a Text component -> React Native is strict, every base component has it's purpose and this is a React component for displaying text which supports nesting, styling, and touch handling */}
      <StatusBar style="auto" />
      <Button title='Tap me'/>
    </View>
  );
}

// there is no CSS support in React Native but can styling with: Inline Styles, StyleSheet Objects  -> both is JS code passed as props to Component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { // only has to change here, CLEAN CODE
    margin: 16,
    padding: 16,
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 2
  }
});
