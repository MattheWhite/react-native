import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const BottomTab = createBottomTabNavigator(); //

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{}}>
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          // if you move these styling options into the main TypeSMTH.Navigation container, then all the app screen will inherit these styling options
          options={{
            headerStyle: { backgroundColor: "#3c0a" },
            headerTintColor: "white",
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{ }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

/*
INSTALL DRAWER TYPE NAVIGATOR

1. npm install @react-navigation/bottom-tabs

*/
