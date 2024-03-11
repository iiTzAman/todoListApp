import { useState } from "react";
import { StyleSheet, View, FlatList, Pressable, Text } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [goalContainerIsVisbile, setGoalContainerVisible] = useState(false)

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    disableGoalsVisibility()
  }

  function deletGoalHandler(id){
      setCourseGoals((currentCourseGoals) => {
        return currentCourseGoals.filter((goal) => goal.id != id)
      })
  }

  function setGoalsVisibility(){
    setGoalContainerVisible(true)
  }

  function disableGoalsVisibility(){
    setGoalContainerVisible(false)
  }

  return (
    <View style={styles.appContainer}>
      <Pressable onPress={setGoalsVisibility}>
        <View style={styles.setGoalBtn}>
          <Text style={styles.setGoalText}>Enter Your Goal</Text>
        </View>
      </Pressable>
      <GoalInput addGoalInput={addGoalHandler} setGoalVisibility={goalContainerIsVisbile} cancelGoalVisibility={disableGoalsVisibility}/>
        <View style={styles.goalsCont}>
          <FlatList
            data={courseGoals}
            renderItem={(goals) => {
              return <GoalItem text={goals.item.text} deleteGoal={deletGoalHandler} id={goals.item.id}/>;
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  goalsCont: {
    flex: 5,
  },
  setGoalBtn:{
    alignItems:'center',
    marginHorizontal:10,
    marginVertical:10,
    padding:10,
    backgroundColor:'#8d2dc9',
    borderRadius:5
  },
  setGoalText:{
    color:'#ffffff',
  },
});
