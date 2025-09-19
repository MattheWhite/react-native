import { FlatList, Text } from "react-native";

import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  // return <Text>{itemData.item.description}</Text>; //itemData.index  -> we can access the index too
  return <ExpenseItem {...itemData.item} />; // we can forward raw data with object destruction since the property names are matching as key-value pairs
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
