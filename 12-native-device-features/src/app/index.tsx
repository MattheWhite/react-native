// import { StatusBar } from "expo-status-bar";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";


// import AllPlaces from "./screens/AllPlaces";
// import AddPlace from "./screens/AddPlace";

// const Stack = createNativeStackNavigator();

// export default function App() {
  //   return (
    //     <>
    //       <StatusBar style="dark" />
    //       <NavigationContainer>
    //         <Stack.Navigator>
    //           <Stack.Screen name="AllPlaces" component={AllPlaces} />
    //           <Stack.Screen name="AddPlace" component={AddPlace} />
    //         </Stack.Navigator>
    //       </NavigationContainer>
    //     </>
    //   );
    // }




// --  file based routing (newer) | above is the old way  --
//     this will be the main '/' route (landing page) -> _layout.tsx will handle this screen as 'index' since the name
//     the routes are '/<filename>' for the components with the <filename>.tsx inside the /app folder, no need for /screens folder -> otherwise the route would be /screens/AllPlaces e.g.
import AllPlaces from "./AllPlaces";
export default AllPlaces;
