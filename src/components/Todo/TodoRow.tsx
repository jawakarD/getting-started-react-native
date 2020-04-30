import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TodoState} from 'reducers/todo';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';

const TodoRow = ({
  todo,
  toggleTodo,
}: {
  todo: TodoState;
  toggleTodo: (todo: TodoState) => void;
}) => (
  <View style={styles.row}>
    <View style={styles.checkBox}>
      <CheckBox
        value={todo.completed}
        tintColors={{
          true: 'white',
          false: 'white',
        }}
      />
    </View>
    <View style={styles.title}>
      <TouchableOpacity onPress={() => toggleTodo(todo)}>
        <Text style={styles.text}>{todo.title}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default TodoRow;
