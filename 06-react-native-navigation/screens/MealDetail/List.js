import { Text, View, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View>
      <Text key={dataPoint}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({});
