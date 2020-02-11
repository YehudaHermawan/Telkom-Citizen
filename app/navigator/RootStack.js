import {createStackNavigator} from 'react-navigation-stack';
import Loginscreen from '../screen/Loginscreen/Loginscreen.js';
import Homescreen from '../screen/Homescreen/Homescreen';
import Laporscreen from '../screen/Laporscreen/Laporscreen';
import Feedbackscreen from '../screen/Feedbackscreen/Feedbackscreen';
import Profilescreen from '../screen/Profilescreen/Profilescreen';
import Imgpickscreen from '../screen/Imgpickscreen/Imgpickscreen';

export const LoginStack = createStackNavigator(
  {
    Login: {
      screen: Loginscreen,
    },
  },
  {headerMode: 'none', navigationOptions: {tabBarVisible: false}},
);

export const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Homescreen,
    },
    Lapor: {
      screen: Laporscreen,
    },
    Feedback: {
      screen: Feedbackscreen,
    },
    Profile: {
      screen: Profilescreen,
    },
    Imgpick: {
      screen: Imgpickscreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {tabBarVisible: false},
  },
);
