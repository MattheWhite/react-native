import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';

/* 
  Install react navigation:
    1. npm install @react-navigation/native
    2. npx expo install react-native-screens react-native-safe-area-context
*/

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <CategoriesScreen />
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
