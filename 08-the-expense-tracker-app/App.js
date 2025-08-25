import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpensesOverview() {
  return <BottomTab.Navigator>
    <BottomTab.Screen name="RecentExpenses" component={RecentExpenses} />
    <BottomTab.Screen name="AllExpenses" component={AllExpenses} />
  </BottomTab.Navigator>;
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>{/* has to be wrapped around components related with navigation */}
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
