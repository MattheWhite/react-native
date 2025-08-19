import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const BottomTab = createBottomTabNavigator(); //

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a" },
          headerTintColor: "white",
          tabBarActiveTintColor: "#3c0"
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          // if you move these styling options into the main TypeSMTH.Navigation container, then all the app screen will inherit these styling options
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ) /* color and size automatically adjusted by default and passed to the arrow function */,
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

/*
INSTALL DRAWER TYPE NAVIGATOR

1. npm install @react-navigation/bottom-tabs

*/
