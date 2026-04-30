import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SQLiteProvider } from 'expo-sqlite';

import IconButton from "../components/UI/IconButton";
import { Colors } from "../../constants/colors";
import { init } from "../components/util/database";

export default function RootLayout() {
  return (
    <>
      <SQLiteProvider databaseName="places.db" onInit={init}>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
            unmountOnBlur: false // Keeps screen mounted when navigating away, specially with expo-routing occurs this bug
          }}
        >
          <Stack.Screen
            name="index" // navigate automatically to index.tsx because modern filebased expo-routing
            // with () braces, this OPTIONS returns a whole object so we can use automatically passed navigation prop to handle navigation, title changed for header not show 'index'
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen name="Map" />{/* no need for component={Map} like traditional React Navigation setup, expo-router will find the component based on file structure under app/ folder */}
        </Stack>
      </SQLiteProvider>
    </>
  );
}
