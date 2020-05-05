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
import {addNotes} from 'actions/todo';
import {Todo} from 'reducers/todo';

const AddNotes = ({navigation}: TodoProps) => {
  const [dirty, setDirty] = useState(false);
  const dispatch = useDispatch();

  const notes = useSelector((state: {todo: Todo}) => state.todo.notes);
  const error = useSelector((state: {todo: Todo}) => state.todo.error?.notes);

  const onChange = (text: string) => {
    setDirty(true);
    dispatch(addNotes(text));
  };

  return (
    <ScrollView style={styles.addTodoModal}>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[styles.todoInput, styles.text]}
        onChangeText={onChange}
        placeholder="Notes"
        value={notes}
      />

      {dirty && Boolean(error) && <Text>{error}</Text>}

      <View>
        <TouchableOpacity
          disabled={!notes}
          onPress={() => navigation.navigate('AddNotes')}
          style={styles.submitButton}>
          <Text style={[styles.text, styles.titleText]}>Next</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={styles.submitButton}>
          <Text style={[styles.text, styles.titleText]}>Previous</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddNotes;
