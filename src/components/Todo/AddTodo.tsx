import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import style from './style';

const AddTodo = ({navigation}: StackHeaderProps) => {
  return (
    <View style={style.view}>
      <Text style={style.text}>Let's add a todo!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

export default AddTodo;
