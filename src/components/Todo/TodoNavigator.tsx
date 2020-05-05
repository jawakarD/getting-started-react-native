import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Todo from './Todo';
import AddTodo from './AddTodo';
import {Image, View, Text} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import styles from './style';
import AddNotes from './AddNotes';

export type TodoStackParamsList = {
  Todo: undefined;
  AddTodo: {
    nextId: number;
  };
  AddNotes: undefined;
};

const Stack = createStackNavigator<TodoStackParamsList>();

const LogoTitle = () => {
  const {isInternetReachable} = useNetInfo();
  return (
    <View style={styles.logoTitle}>
      <Image
        source={{
          uri:
            'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/090/thumb/EGH_ReactNative_ToDo-Final.png',
          width: 40,
          height: 40,
        }}
      />
      {!isInternetReachable && (
        <Text style={styles.notConnected}>Not Connected</Text>
      )}
    </View>
  );
};

const TodoNavigator = () => (
  <Stack.Navigator
    initialRouteName="Todo"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#121212',
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
    <Stack.Screen
      name="AddTodo"
      component={AddTodo}
      options={{
        headerTitle: () => <LogoTitle />,
      }}
    />
    <Stack.Screen
      name="AddNotes"
      component={AddNotes}
      options={{
        headerTitle: () => <LogoTitle />,
      }}
    />
  </Stack.Navigator>
);

export default TodoNavigator;
