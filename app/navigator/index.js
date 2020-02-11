import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {LoginStack, HomeStack} from './RootStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginStack,
      Home: HomeStack,
    },
    {initialRouteName: 'Login'},
  ),
);
