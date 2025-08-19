import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator(); //

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{}}>
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          // if you move these styling options into the main TypeSMTH.Navigation container, then all the app screen will inherit these styling options
          options={{
            headerStyle: { backgroundColor: "#3c0a" },
            headerTintColor: "white",
            drawerLabel: "Welcome Screen",
            drawerIcon: (
              { color, size } // color influenced by the DrawerActiveTintColor!  |  if you put {} brackets after the arrow, IT WONT WORK!!!
            ) => <Ionicons name="home" color={color} size={size} />,
            drawerActiveBackgroundColor: "#58f06c",
            drawerActiveTintColor: "white",
            drawerStyle: {
              backgroundColor: "#fcfcf5",
            },
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/*
INSTALL DRAWER TYPE NAVIGATOR

1. npm install @react-navigation/bottom-tabs

*/
