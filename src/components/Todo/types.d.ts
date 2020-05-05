import {StackNavigationProp} from '@react-navigation/stack';
import {TodoStackParamsList} from './TodoNavigator';
import {RouteProp} from '@react-navigation/native';

export interface TodoProps {
  navigation: StackNavigationProp<TodoStackParamsList, 'Todo'>;
  route: RouteProp<TodoStackParamsList, 'AddTodo'>;
}
