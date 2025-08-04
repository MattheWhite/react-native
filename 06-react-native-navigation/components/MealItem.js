import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({ title, imageUrl }) { // dummy meal data has these fields which we can destruct
  return (
    <View>
      <Pressable>
        <View>
        <Image source={{uri: imageUrl}} />{/* if the source from the web you have to define the width-height for the image */}
        <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  }
});