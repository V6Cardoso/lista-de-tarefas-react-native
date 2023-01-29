import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";


function Goalnput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    

    return (
      <>
        <Modal visible={props.visible} animationType='slide' statusBarTranslucent>
          <View style={styles.inputContainer}>
            <Image source={require('../assets/images/goal.png')} style={styles.image}/>
              <TextInput style={styles.textInput} placeholder='Escreva aqui sua tarefa' value={enteredGoalText} onChangeText={goalInputHandler}/>
              <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="cancelar" onPress={props.onCancel} color='#f31282'/></View>
                <View style={styles.button}><Button title='adicionar' onPress={addGoalHandler} color='#9550ef'/></View>
              </View>
          </View>
        </Modal>
      </>
    )
}

export default Goalnput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 87.5,
    margin: 30
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    padding: 12
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  }
});