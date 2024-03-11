import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
   
  return (
    <Pressable onPress={props.deleteGoal.bind(this, props.id)}>
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalContainer: {
    padding: 10,
    backgroundColor: "#58b9e2",
    borderRadius: 4,
    marginTop: 10,
  },
  goalText: {
    color: "#ffffff",
  },
});
