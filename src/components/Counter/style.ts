import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 30,
  },
  text: {
    fontSize: 50,
  },
  icon: {
    fontSize: 60,
  },
  input: {
    fontSize: 30,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    flex: 1,
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#444',
    fontSize: 20,
    padding: 15,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
  },
  buttonHeader: {
    marginRight: 20,
  },
});
