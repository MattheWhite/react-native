import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native"; // instead this hook we could pass navigation below here this component using props but this hook is cleaner | Because navigation only passed to registered screen automatically

function CategoryGridTile({ title, color, onPress }) {
  const navigation = useNavigation(); // showing purposes
  
  return (
    <View style={styles.gridItem}>
      <Pressable android_ripple={{color: '#dcdcdc'}}
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={onPress}
        >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>{/* if you move the backgroundColor part to the outer View's style, it makes another effect */}
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 160,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white', // looks much better the shadow this way
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // shadow visible on iOS

    // shadows for iOS
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 }
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});
