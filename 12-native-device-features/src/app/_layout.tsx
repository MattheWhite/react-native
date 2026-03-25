import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import IconButton from "../components/UI/IconButton";
import { title } from "node:process";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen
          name="index"
          options={({ navigation }) => ({ // with {} braces, this returns a whole object so we can use automatically passed navigation prop to handle navigation, title changed for header not show 'index'
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
      </Stack>
    </>
  );
}
