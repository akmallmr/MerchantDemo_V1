import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'

const Router = createSwitchNavigator (
    {
        // Auth: { screen: AuthNavigator },
        Main: { screen: MainNavigator },
        Auth: { screen: AuthNavigator }
    },
    );

export default createAppContainer(Router);