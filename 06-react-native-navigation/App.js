import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // should wrap around all containers/components which we want to use the benefits of navigation package
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';

/* 
  Install react navigation:
    1. npm install @react-navigation/native
    2. npx expo install react-native-screens react-native-safe-area-context

    then install a specific navigator type package (stack type)
    3. expo install @react-navigation/native-stack
*/

const Stack = createNativeStackNavigator(); // creates an Object (a stack like object of screens -> fitting name) with 2 properties, where every Object behaves as one component

export default function App() {
  return (
    <>
      <StatusBar style='dark' />{/* on statusBar we won't use navigation but on the whole app we will */}
      <NavigationContainer>{/* changes the app by default, nice wrapper -> adds a header and spacing for statusbar too */}
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />{/* allow us to register a screen managed by this navigator | name is unique */}
        </Stack.Navigator>
        {/* <CategoriesScreen />  we setted for this component the navigation above */}
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
