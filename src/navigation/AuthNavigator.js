import React from 'react';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';

import Splash from '../Pages/SplashScreen/Splash';
import Register from '../Pages/Auth/Components/Register/Register';
import SignIn from '../Pages/Auth/Components/Signin/Signin';

const AuthNavigator = createStackNavigator(
  {
    Register: {
      screen: Register,
      // navigationOptions: {...TransitionPresets.SlideFromRightIOS},
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {...TransitionPresets.SlideFromRightIOS},
    },
  },
  {
    headerMode: 'none',
    initialRouteKey: 'Splash',
    defaultNavigationOptions: {
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      ...TransitionPresets.ScaleFromCenterAndroid,
    },
  },
);

export default AuthNavigator;
