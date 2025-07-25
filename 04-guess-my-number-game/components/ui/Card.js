import { StyleSheet, View, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function Card({ children }) { // now with children incoming parameter we can use this component as a wrapper
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginTop: deviceWidth < 400 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,

    /* iOS  */
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
});
