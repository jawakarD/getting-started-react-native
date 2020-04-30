import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const Header = () => (
  <View style={styles.header}>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Counter</Text>
      <Text style={styles.sectionDescription}>
        Async counter to use the counter
      </Text>
    </View>
  </View>
);

export default Header;
