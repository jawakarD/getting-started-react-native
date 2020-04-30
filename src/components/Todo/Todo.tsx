import React, {useEffect} from 'react';
import {ScrollView, ActivityIndicator, View} from 'react-native';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {TodosState, TodoState} from 'reducers/todo';
import {getTodos, updateTodo} from 'actions/todo';
import TodoRow from './TodoRow';
import {INIT, LOADING} from 'constants/uiStates';

const Todo = () => {
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

  return asyncState === INIT || LOADING ? (
    <ScrollView style={styles.scrollView}>
      {todos.map((todo) => (
        <TodoRow key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ScrollView>
  ) : (
    <View style={styles.view}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Todo;
