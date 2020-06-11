import * as React from 'react';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import SplashScreen from '../Pages/SplashScreen/Splash';

const Router = createSwitchNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {...TransitionPresets.ScaleFromCenterAndroid},
    },
    Auth: {
      screen: AuthNavigator,
      navigationOptions: {...TransitionPresets.ScaleFromCenterAndroid},
    },
    Main: {
      screen: MainNavigator,
      navigationOptions: {...TransitionPresets.ScaleFromCenterAndroid},
    },
  },
  {
    defaultNavigationOptions: {
      ...TransitionPresets.ScaleFromCenterAndroid,
    },
  },
);

export default createAppContainer(Router);
