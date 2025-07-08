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
    
    //borderWidth: Platform.OS === 'android' ? 0 : 2, the Platform lives through the lifecycle of the app since it won't change where it runs | making different design depending on the OS it runs on
    borderWidth: Platform.select({android: 0, ios: 2}), // other solution without ternary operator, cleaner code
    /*
    OR ADD 2 SEPARATE Title.js file for android and iOS!!!  =>  Title.ios.js, Title.android.js   - if you keep your imports in all file (simply import... from Title) then React Native will automatically use the correct import from the correct file depending on what platform it runs on!  
    This is true for constans too! So you can specify colors for different platforms for example easily this way
    
    TEST IT: delete Title.js and change the borderWidth in Title.android.js
    */
  
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%', // max width adapting (relative) to the parent element, always refer to the parent container which holds Title in this case so the VIew element in GameScreen => if less is enough then won't use the whole space, this is the MAX it can use, but can use less
    minWidth: 300 // must use, this is the MINIMUM space, it only can be bigger BUT not bigger then the '80%'
  },
});
