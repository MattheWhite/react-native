import { Button, StyleSheet, TextInput, View, Text } from "react-native";

export default function App() {
    return (
        <View style={style.appContainer}>
            <View>
                <TextInput placeholder="Your course goal here" />
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
    }
});
