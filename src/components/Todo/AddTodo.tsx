import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {useDispatch} from 'react-redux';
import {storeTodo} from 'actions/todo';
import {AddTodoProps} from './types';

const AddTodo = ({navigation, route}: AddTodoProps) => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      storeTodo({
        id: route.params.nextId,
        title: todo,
        completed: false,
        notes: '',
        reminder: '',
      }),
    );
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.addTodoModal}>
      <TextInput
        style={[styles.todoInput, styles.text]}
        onChangeText={(text) => setTodo(text)}
        placeholder="Add todo"
        value={todo}
      />
      <View>
        <TouchableOpacity onPress={addTodo} style={styles.submitButton}>
          <Text style={[styles.text, styles.titleText]}>Submit todo</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={styles.submitButton}>
          <Text style={[styles.text, styles.titleText]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddTodo;
