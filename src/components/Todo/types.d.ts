import {StackNavigationProp} from '@react-navigation/stack';
import {TodoStackParamsList} from './TodoNavigator';
import {ModalStackParamsList} from '../../../App';
import {RouteProp, CompositeNavigationProp} from '@react-navigation/native';

export interface TodoProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<TodoStackParamsList, 'Todo'>,
    StackNavigationProp<ModalStackParamsList, 'AddTodo'>
  >;
}

export interface AddTodoProps {
  navigation: StackNavigationProp<ModalStackParamsList, 'AddTodo'>;
  route: RouteProp<ModalStackParamsList, 'AddTodo'>;
}
