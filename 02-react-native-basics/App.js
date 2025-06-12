import { Button, StyleSheet, TextInput, View, Text } from "react-native";

export default function App() {
    return (
        <View style={style.appContainer}>
            <View style={style.inputContainer}>
                <TextInput style={style.textInput} placeholder="Your course goal here" />
                <Button title="Add Goal" />
            </View>
            <View>
                <Text>List of goals...</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    appContainer: {
        padding: 50
    },
    inputContainer: {
        flexDirection: "row", // default setting is 'column' -> thats why it is displayed below eachother at start 
        justifyContent: "space-between"
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#cccc',
        width: '80%',
        marginRight: 8, // no touching between the input and the button
        padding: 8 // placeholder not be on the left edge
    }
});
