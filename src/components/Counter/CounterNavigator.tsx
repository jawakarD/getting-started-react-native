import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from 'components/Home/Home';
import Counter from './Counter';
import {Image} from 'react-native';

const Stack = createStackNavigator();

const LogoTitle = () => (
  <Image
    source={{
      uri:
        'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/242/thumb/EGH_ReactTakeoutbox_.png',
      width: 50,
      height: 50,
    }}
  />
);

const CounterNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#444',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name="Counter" component={Counter} />
    <Stack.Screen
      name="Home"
      component={Home}
      initialParams={{currentCount: 1}}
      options={{
        headerTitle: () => <LogoTitle />,
      }}
    />
  </Stack.Navigator>
);

export default CounterNavigator;
