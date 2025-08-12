import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, color, onPress }) {
    return <Pressable onPress={onPress} style={(pressed) => {pressed && styles.pressed}}>
        <Ionicons name={icon} size={16} color={color} style={styles.icon} />
    </Pressable>;
}

export default IconButton;

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: '100%',
        alignItems: 'center'
    },
    pressed: {
        opacity: 0.7
    }
});
