import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // should wrap around all containers/components which we want to use the benefits of navigation package

import CategoriesScreen from './screens/CategoriesScreen';

/* 
  Install react navigation:
    1. npm install @react-navigation/native
    2. npx expo install react-native-screens react-native-safe-area-context
*/

export default function App() {
  return (
    <>
      <StatusBar style='light' />{/* on statusBar we won't use navigation but on the whole app we will */}
      <NavigationContainer>
        <CategoriesScreen />
      </NavigationContainer>
    </>
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
