import { Pressable, StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function ExpenseItem({ description, amount, date }) {
  return (
    <Pressable>
      <View>
        <View>
          <Text>{description}</Text>
          <Text>{date}</Text>
        </View>
        <View>
          <Text>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.error500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 4,

    // shadowing for iOS
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5
  },
  textBase: {
    color: GlobalStyles.colors.primary50
  },
  description: {
    fontSize: 17,
    marginBottom: 4,
    fontWeight: 'bold'
  }
});
