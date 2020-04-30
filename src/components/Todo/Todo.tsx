import React, {useEffect} from 'react';
<<<<<<< HEAD
import {
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
=======
import {ScrollView, ActivityIndicator, View} from 'react-native';
>>>>>>> Use loding indicator
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {TodosState, TodoState} from 'reducers/todo';
import {getTodos, updateTodo} from 'actions/todo';
import TodoRow from './TodoRow';
<<<<<<< HEAD
import {TodoProps} from './types';
import {LOADING} from 'constants/uiStates';
=======
import {INIT, LOADING} from 'constants/uiStates';
>>>>>>> Use loding indicator

const Todo = ({navigation}: TodoProps) => {
  const disptach = useDispatch();
  const todos = useSelector((state: {todo: TodosState}) => state.todo.todos);
  const asyncState = useSelector(
    (state: {todo: TodosState}) => state.todo.asyncState,
  );

  useEffect(() => {
    disptach(getTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTodo = (todo: TodoState) => {
    disptach(
      updateTodo({
        ...todo,
        completed: !todo.completed,
      }),
    );
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.row, styles.addTodo]}
        onPress={() =>
          navigation.navigate('AddTodo', {
            nextId: todos?.[todos.length - 1]?.id + 1 || 1,
          })
        }>
        <Text style={styles.text}>Add todo</Text>
      </TouchableOpacity>
      {asyncState === LOADING ? (
        <View style={styles.view}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ScrollView style={styles.scrollView}>
          {todos.map((todo) => (
            <TodoRow key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          ))}
        </ScrollView>
      )}
    </>
  );
};

export default Todo;
