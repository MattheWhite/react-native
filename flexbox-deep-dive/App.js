import React from 'react';
import {Text, View} from 'react-native';

/* 
To start the project:
    1. npm install
    2. npm update expo
    3. npx expo install react-native@0.71.14 (actually didn't exetuce, after the 4.step i pressed 'a' FOR ANDROID, then press 'y' FOR YES to upgrade Expo Go)
    4. npm start    
 */

export default function App() {
    return (
        /* in React Native every View uses Flexbox by default (not like web div)
            and orders the element in a column top-to-bottom (not like web div -> orders in a row)
            Important with flexbox:
                - main axes: flexDirection defines
                - cross axes: the opposite of the main axes -> row=left-right crossa.=top-to-bottom | reverse-column=bottom-to-top crossa.=right-to-left*/
        <View style={{padding: 50, flexDirection: 'row', width: '80%', height: 300 }}>
            <View
                style={{
                    backgroundColor: 'red',
                    /* width-height by default is as big as the content inside this element desires to be */
                    // width: 100,
                    // height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>1</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'blue',
                    // width: 100,
                    // height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>2</Text>
            </View>
            <View
                style={{
                    backgroundColor: 'green',
                    // width: 100,
                    // height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>3</Text>
            </View>
        </View>
    );
}
