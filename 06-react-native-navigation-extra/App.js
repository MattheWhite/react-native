import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator(); // Drawer object

export default function App() {
    // Stack object
  return <NavigationContainer>
    <Drawer.Navigator screenOptions={{}} >{/* the screenOptions available too | use for the screens in the navigator  |  initialRouteName='User'  -> not the top most Screen will be the default starting screen */}
      <Drawer.Screen name='Welcome' component={WelcomeScreen} options={{/* these options only applied to this screen, if you select the other the default styling is applied for it */
        headerStyle: {backgroundColor: '#3c0a'},
        headerTintColor: 'white',
        drawerLabel: 'Welcome Screen',
        drawerActiveBackgroundColor: '#58f06c',
        drawerActiveTintColor: 'white',
        drawerStyle: {
          backgroundColor: '#ccc'
        }
      }} />{/* just like with Stack type Navigator */}
      <Drawer.Screen name='User' component={UserScreen} />
    </Drawer.Navigator>
  </NavigationContainer>;
}

/*
INSTALL DRAWER TYPE NAVIGATOR

1. npm install @react-navigation/drawer
2. expo install react-native-gesture-handler react-native-neanimated

*/
