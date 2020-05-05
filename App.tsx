/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {configureStore, sagaMiddleWare} from './src/store';
import {rootSaga} from './src/sagas';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from 'react-native-splash-screen';

import TodoNavigator from 'components/Todo/TodoNavigator';
import CounterNavigator from 'components/Counter/CounterNavigator';

const store = configureStore();
sagaMiddleWare.run(rootSaga);

export type ModalStackParamsList = {
  Main: undefined;
  AddTodo: {
    nextId: number;
  };
};

const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#444" />
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Todo"
            screenOptions={({route}) => {
              return {
                tabBarIcon: ({color, size}) => {
                  const icons: {[key: string]: string} = {
                    Counter: 'plus-minus',
                    Todo: 'checkerboard',
                  };

                  return (
                    <Icon name={icons[route.name]} size={size} color={color} />
                  );
                },
              };
            }}>
            <Tab.Screen name="Counter" component={CounterNavigator} />
            <Tab.Screen name="Todo" component={TodoNavigator} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
