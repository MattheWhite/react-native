import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // should wrap around all containers/components which we want to use the benefits of navigation package
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

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
    {/*

    Out of the box, the top-most screen (i.e. the first child inside of <Stack.Navigator>) is used as the initial screen.

      I.e., in the following example, the AllProducts screen would be shown as an initial screen when the app starts:

      <Stack.Navigator>
        <Stack.Screen name="AllProducts" component={AllProducts} /> // initial screen
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
      You can therefore change the initial screen by changing the <Stack.Screen> order. Alternatively, there also is an initialRouteName prop that can be set on the navigator component (i.e., on <Stack.Navigator> in this case):

      <Stack.Navigator initialRouteName="ProductDetails">
        <Stack.Screen name="AllProducts" component={AllProducts} /> 
        <Stack.Screen name="ProductDetails" component={ProductDetails} /> // initial screen
      </Stack.Navigator>

     */}
      <StatusBar style='dark' />{/* on statusBar we won't use navigation but on the whole app we will */}
      <NavigationContainer>{/* changes the app by default, nice wrapper -> adds a header and spacing for statusbar too */}
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />{/* allow us to register a screen managed by this navigator | name is unique */}
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
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
