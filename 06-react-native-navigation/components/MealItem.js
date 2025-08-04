import { Image, Pressable, Text, View } from "react-native";

function MealItem({ title, imageUrl }) { // dummy meal data has these fields which we can destruct
  return (
    <View>
      <Pressable>
        <View>
        <Image source={{uri: imageUrl}} />
        <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
