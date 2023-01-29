import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
      
      <View style={styles.goalItem}>
        <Pressable 
          android_ripple={{color: '#300c60', borderless: true}}
          onPress={props.onDeleteItem.bind(this, props.number)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
    </View>
      
    
    );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  pressedItem: {
    opacity: 0.8
  },
  goalText: {
    color: 'white',
    padding: 8,
  }
});