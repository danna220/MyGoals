import { useState } from "react";
import { StyleSheet, View, FlatList} from 'react-native';
import GoalInputn  from "./Components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([])

  function handleAddGoal(enteredGoalText) {
    // console.log(enteredGoalText)
    // console.log('Hello You')
    setGoals(() => [...goals, {text: enteredGoalText, key: Math.random()}])
    console.log('goal', goals)
    console.log('handleAddGoal')
  }

  function handleDeleteGoal(id) {
    console.log('DELETE')
    const deleteGoal = goals.filter((goal) => {return goal.key !== id})
  }

  return (
    <View style ={style.container}>

      <GoalInput 
        onAddGoal = {handleAddGoal}
      />

      <View style = {styles.goalsContainer}>
        <FlatList 
          data = {goals}
          renderItem = { (itemData) => {
            return (
              <GoalItem 
                itemData={itemData}
                OnDeleteItem={handleDeleteGoal}
                id={itemData.item.key}
              />
            )
          }}
          keyExtractor= {(item) => {
            return item.id
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7BC9FF'
  },

  btnGoal: {
    borderRadius: 20,
    backgroundColor: '#cccccc'
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 3,
    padding: 8,
    borderRadius: 5
  },

  goalsContainer: {
    flex: 5
  },
})