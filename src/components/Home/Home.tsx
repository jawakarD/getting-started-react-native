import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';

const Home = ({navigation, route}: any) => (
  <View style={styles.view}>
    <Text style={styles.text}>Where you'll always end up!</Text>
    <Text style={styles.text}>Counter: {route.params.currentCount}</Text>
    <Button
      title="Change counter number"
      onPress={() => navigation.navigate('Counter')}
    />
  </View>
);

export default Home;
