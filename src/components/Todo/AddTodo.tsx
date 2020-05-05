import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {TodoProps} from './types';
import {addTitle} from 'actions/todo';
import {Todo} from 'reducers/todo';

const AddTodo = ({navigation}: TodoProps) => {
  const [dirty, setDirty] = useState(false);
  const dispatch = useDispatch();

  const title = useSelector((state: {todo: Todo}) => state.todo.title);
  const error = useSelector((state: {todo: Todo}) => state.todo.error?.title);

  const onChange = (text: string) => {
    setDirty(true);
    dispatch(addTitle(text));
  };

  return (
    <ScrollView style={styles.addTodoModal}>
      <TextInput
        style={[styles.todoInput, styles.text]}
        onChangeText={onChange}
        placeholder="Add todo"
        value={title}
      />

      {dirty && Boolean(error) && <Text>Enter todo</Text>}

      <View>
        <TouchableOpacity
          disabled={!title}
          onPress={() => navigation.navigate('AddNotes')}
          style={styles.submitButton}>
          <Text style={[styles.text, styles.titleText]}>Next</Text>
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
