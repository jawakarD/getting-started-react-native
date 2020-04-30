import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';
import {StackHeaderProps} from '@react-navigation/stack';

const Home = ({navigation}: StackHeaderProps) => (
  <View style={styles.view}>
    <Text style={styles.text}>About Nothing!</Text>
    <Button title="Open modal" onPress={() => navigation.navigate('Modal')} />
  </View>
);

export default Home;
