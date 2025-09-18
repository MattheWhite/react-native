import { FlatList, Text } from "react-native";

function renderExpenseItem(itemData) {
  return <Text>{itemData.item.description}</Text>; //itemData.index  -> we can access the index too
}

function ExpensesList({ expenses }) {
  return (
    /* use FlatList to dynamically render only the displayed data0 */
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
