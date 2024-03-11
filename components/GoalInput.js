import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    props.addGoalInput(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={props.setGoalVisibility} animationType='slide'>
    <View style={styles.goalsHeadCont}>
      <TextInput
        style={styles.txtInput}
        placeholder="Enter your Goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
      <Button title="Cancel" onPress={props.cancelGoalVisibility} color="#d6387a"/>
      <Button style={styles.button} title="Add Goal" onPress={addGoalHandler} color="#3892d6"/>
      </View>
    </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  goalsHeadCont: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    marginBottom: 20,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  txtInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "90%",
    marginRight: 5,
    padding: 10,
  },
  buttonContainer:{
    flexDirection:'row',
    gap:20,
    marginTop:10
  },

});
