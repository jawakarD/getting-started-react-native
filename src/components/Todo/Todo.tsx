import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {TodosState, TodoState} from 'reducers/todo';
import {getTodos, updateTodo} from 'actions/todo';
import TodoRow from './TodoRow';

const Todo = () => {
  const disptach = useDispatch();
  const todos = useSelector((state: {todo: TodosState}) => state.todo.todos);

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
    <ScrollView style={styles.scrollView}>
      {todos.map((todo) => (
        <TodoRow todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ScrollView>
  );
};

export default Todo;
