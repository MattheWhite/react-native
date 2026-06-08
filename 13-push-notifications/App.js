import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

// in this main App.js file  ->  ensures this code will run when the app starts 100%
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowBanner: true // shouldShowAlert -> deprecated, use this or shouldShowList
    };
  }
})

export default function App() {
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      console.log('NOTIFICATION RECEIVED!');
      console.log(notification);
      notification.content.data.userName; // -> received the userName what we passed in scheduling
    });

    // when the user respondes for the notification
    const subscription2 = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('NOTIFICATION RESPONSE RECEIVED!');
      console.log(response);
      response.notification.request.content.data.userName;
    });

    return () => {
      subscription.remove(); // clean up when this component removed (the main component = App closes)
      subscription2.remove();
    };
  }, []);
  
  function sceduleNotificationHandler() { // IMPORTANT --------------------------------->>>> Expo 53 SDK eliminated push notifications with expo's sandbox credential | now developers must do a development build instead of Expo Go
    Notifications.scheduleNotificationAsync({
      // lot of possible configuration available
      content: {
        title: 'First local notification',
        body: 'This is the body of the notification.',
        data: {
          userName: 'XYZ'
          // lot of extra data can be assigned to this notification
        }
      },
      trigger: {
        second: 5
      }
    });
  }
  
  return (
    <View style={styles.container}>
      <Button title='Scedule Notification' onPress={sceduleNotificationHandler} />
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
