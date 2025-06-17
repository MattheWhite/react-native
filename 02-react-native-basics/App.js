import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";

/* 
    For web:
        npx expo install @expo/metro-runtime
        Press 'w' in the expo server's terminal window
*/

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) { // entered text is automatically passed by RN
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        console.log(enteredGoalText);
    };
    
    return (
        <View style={style.appContainer}>
            <View style={style.inputContainer}>
                <TextInput style={style.textInput} placeholder="Your course goal here" onChangeText={goalInputHandler} />{/* only the pointer passed, no ()parentheses at the end because then when the code is compiled/rendered it would be executed */}
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={style.goalsContainer}>
                <Text>List of goals...</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    appContainer: {
        flex: 1, // assign the whole available space for the app, since it has no sibling element, with 1 it takes all the available space
        paddingTop: 50,
        paddingHorizontal: 16
    },
    inputContainer: {
        flex: 1,// flexbox functionality used with this property, learned from Flexbox section, by default React Native uses flexbox on elements
        flexDirection: "row", // default setting is 'column' -> thats why it is displayed below eachother at start 
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccc'
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#cccc',
        width: '80%',
        marginRight: 8, // no touching between the input and the button
        padding: 8 // placeholder not be on the left edge
    },
    goalsContainer: {
        flex: 8
    }
});
