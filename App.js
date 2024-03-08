import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.goalsHeadCont}>
        <TextInput style={styles.txtInput} placeholder='Enter your Goal'/>
        <Button title="Add Goal"/>
      </View>
      <View style={styles.goalsCont}>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:60,
    paddingHorizontal:16
  },
  goalsHeadCont:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:20,
    borderBottomColor:'#cccccc',
    borderBottomWidth:1
  },
  txtInput:{
    borderWidth:2,
    borderColor:'#cccccc',
    width:'70%',
    marginRight:5,
    padding:10
  },
  goalsCont:{
    flex:5
  },

});
