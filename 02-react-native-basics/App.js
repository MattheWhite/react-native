import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

/* 
    For web:
        npx expo install @expo/metro-runtime
        Press 'w' in the expo server's terminal window
*/

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    // setCourseGoals(...courseGoals, enteredGoalText); -> not the best way to updating state when the new state depends on the previous state

    // right way to update state if it depends on the prev. state - pass an arrow function, the currentCourseGoals is provided by RN automatically
    setCourseGoals((currentCourseGoals) => [
      // () around the parameter is not necessary, but with HOOKS/STATE VARIABLE UPDATING FUNCTIONS THE CURLY BRACKETS ARE NOT USABLE
      ...currentCourseGoals,
      //  enteredGoalText,
      { text: enteredGoalText, id: Math.random().toString() }, // -> manually generating a id for every element  |  then in FlatList we use: itemData.item.text
      //                                                                Other solution is using 'keyExtractor' on FlatList
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={style.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={style.goalsContainer}>
        {/* Another difference between web and React Native -> on web if you add too many items it will be automatically scrollable, NOT in React Native! Here you have to add specific ScrollView element to enable scrolling 
        
        Downsize for ScrollView -> if you have a very long list, it's still rendering the whole list even if it's not displayed  = performance issue
            Use instead:    FlatList -> render and load only the items which are visible
        
        PREVIOUS CODE:
            
            <ScrollView>
            /* <Text>List of goals...</Text>
            
            {courseGoals.map((goal) => (
                <View style={style.goalItem}>{/* wrap the goal Text output element into a View, where iOS's Native element supports borderRadius! View does, Text doesNOT
                    <Text key={courseGoals.lastIndexOf(goal)} style={style.goalText}>{goal}</Text> /* unlike in CSS, in RN styling DOES NOT cascade, child elements are NOT inherit any | without the {} brackets it would only display 'goal' each time | Add key to handle ERROR:  Each child in a list should have a unique "key" prop.%s%s
                </View>
            ))}
            </ScrollView> */}

        {/* FlatList has 2 KEY PROP (wont use iteration like above): data, renderItem -> renderItem gets automatically one elem of the passed data (array like Object) and calls the function on it which is declared */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            /* itemData is actually an automatically weapped Object around the actual data */
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteGoal={deleteGoalHandler}
              />
            );
          }}
          alwaysBounceVertical={false} // alwaysBounceVertical is an iOS feature for movement styling
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
        {/* automatically receives 'item', 'index'  |  just like 'renderItem' this is called on every item too, to get a unique key and attach for them*/}
      </View>
    </View>
  );
}

// unlike in CSS, in RN styling DOES NOT cascade, child elements are NOT inherit any
const style = StyleSheet.create({
  appContainer: {
    flex: 1, // assign the whole available space for the app, since it has no sibling element, with 1 it takes all the available space
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 8,
  },
});
