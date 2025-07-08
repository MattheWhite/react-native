import { Text, StyleSheet, Platform } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%', // max width adapting (relative) to the parent element, always refer to the parent container which holds Title in this case so the VIew element in GameScreen => if less is enough then won't use the whole space, this is the MAX it can use, but can use less
    minWidth: 300 // must use, this is the MINIMUM space, it only can be bigger BUT not bigger then the '80%'
  },
});
