import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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


/* 
Pressed 'w' -> open web

It looks like you're trying to use web support but don't have the required dependencies installed.

Please install react-dom@18.3.1, react-native-web@~0.19.13, @expo/metro-runtime@~4.0.1 by running:

npx expo install react-dom react-native-web @expo/metro-runtime

If you're not using web, please ensure you remove the "web" string from the platforms array in the project Expo config.

› Stopped server

mfeher@MSNB-1001 MINGW64 /d/ProjectsLocal/react-native/01-first-app/my-react-native-app (main)
$ npx expo install react-dom react-native-web @expo/metro-runtime
› Installing 3 SDK 52.0.0 compatible native modules using npm
> npm install





Install Open JDK with choko package manager

choco install -y microsoft-openjdk17
Chocolatey v2.2.2
Installing the following packages:
microsoft-openjdk17
By installing, you accept licenses for the packages.

microsoft-openjdk17 v17.0.14 [Approved]
microsoft-openjdk17 package files install completed. Performing other installation steps.
Downloading microsoft-openjdk17 64 bit
  from 'https://aka.ms/download-jdk/microsoft-jdk-17.0.14-windows-x64.msi'
Progress: 100% - Completed download of C:\Users\mfeher\AppData\Local\Temp\chocolatey\microsoft-openjdk17\17.0.14\microsoft-jdk-17.0.14-windows-x64.msi (160.08 MB).
Download of microsoft-jdk-17.0.14-windows-x64.msi (160.08 MB) completed.
Hashes match.
Installing microsoft-openjdk17...
microsoft-openjdk17 has been installed.
  microsoft-openjdk17 may be able to be automatically uninstalled.
Environment Vars (like PATH) have changed. Close/reopen your shell to
 see the changes (or in powershell/cmd.exe just type `refreshenv`).
 The install of microsoft-openjdk17 was successful.
  Software installed to 'C:\Program Files\Microsoft\jdk-17.0.14.7-hotspot\'


  THEN start Android Studio
    Choose: More Action > Virtual Device Manager
    Select the installed device emulator to start (press Play button)

    (click into the emulator's device window, Ctrl + m   >  opens developer menu on the emulated phone)

  THEN
    npm start (here in the terminal of the react-native project)
     PRESS 'm'

Logs for your project will appear below. Press Ctrl+C to exit.
› Opening on Android...
› Opening exp://192.168.10.22:8081 on Pixel_8_Pro_API_35
Downloading the Expo Go app [================================================================] 100% 0.0s

› Press ? │ show all commands
Android Bundled 18903ms index.js (655 modules)
 (NOBRIDGE) LOG  Bridgeless mode is enabled
 INFO 
 💡 JavaScript logs will be removed from Metro in React Native 0.77! Please use React Native DevTools as your default tool. Tip: Type j in the terminal to open (requires Google Chrome or Microsoft Edge).     

*/