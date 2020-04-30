import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Todo from './Todo';
import {Image} from 'react-native';

const Stack = createStackNavigator();
const LogoTitle = () => (
  <Image
    source={{
      uri:
        'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/090/thumb/EGH_ReactNative_ToDo-Final.png',
      width: 40,
      height: 40,
    }}
  />
);

const TodoNavigator = () => (
  <Stack.Navigator
    initialRouteName="Todo"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#444',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="Todo"
      component={Todo}
      options={{
        headerTitle: () => <LogoTitle />,
      }}
    />
  </Stack.Navigator>
);

export default TodoNavigator;
