import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const [itemKey, setItemKey] = useState(0);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
      setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, number: itemKey}]);
    setItemKey(itemKey + 1);
    endAddGoalHandler();
  };

  function deleteGoalHandler(number) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.number != number );
    });
  }


  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Adicionar Tarefa' color='#5e0acc' onPress={startAddGoalHandler}/>
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return ( 
              <GoalItem
                text={itemData.item.text}
                number={itemData.item.number}
                onDeleteItem={deleteGoalHandler}
              />
              );
          }}
          keyExtractor={(item, index) => {
            return item.number;
          }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  },
});
