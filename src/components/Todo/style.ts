import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollView: {
    marginTop: 5,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  text: {
    fontSize: 20,
  },
  title: {
    flex: 1,
  },
  titleText: {
    color: 'white',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    padding: 30,
    borderWidth: 2,
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 5,
  },
  checkBox: {
    flex: 0.25,
  },
  addTodo: {
    backgroundColor: 'white',
  },
  addTodoButton: {
    height: 50,
    backgroundColor: 'white',
  },
  addTodoModal: {
    padding: 30,
  },
  todoInput: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  submitButton: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 10,
  },
});
