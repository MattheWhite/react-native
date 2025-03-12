import { registerRootComponent } from 'expo';

import App from './App';

// npx create-expo-app --template blank   -> command to create a blank expo driven app

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
