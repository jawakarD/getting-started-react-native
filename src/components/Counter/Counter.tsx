import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';

import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from '../../actions/counter';
import Header from '../Header/Header';
import {StackHeaderProps} from '@react-navigation/stack';

const Counter = ({navigation}: StackHeaderProps) => {
  const [text, setText] = useState('0');
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.count.count);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={style.buttonHeader}
          onPress={() => {
            navigation.navigate('Home', {
              currentCount: count,
            });
          }}>
          <Text style={style.buttonText}>Add to home ></Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, count]);

  return (
    <>
      <Header />
      <View style={style.container}>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text style={style.icon}>-</Text>
        </TouchableOpacity>
        <Text style={style.text}>{count}</Text>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text style={style.icon}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={style.container}>
        <TextInput
          keyboardType={'number-pad'}
          style={style.input}
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <TouchableOpacity
          style={style.button}
          onPress={() => dispatch(incrementByAmount(Number(text)))}>
          <Text style={style.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button}
          onPress={() => dispatch(incrementAsync(Number(text)))}>
          <Text style={style.buttonText}>Add async</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            navigation.navigate('Home', {
              currentCount: count,
            });
          }}>
          <Text style={style.buttonText}>Add to home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Counter;
