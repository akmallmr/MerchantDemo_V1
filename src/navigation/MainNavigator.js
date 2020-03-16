import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import HomeScreen from '../Pages/Home/Home';
import EditProfile from '../Pages/Home/EditProfile/EditProfile';
import MapsScreen from '../Pages/Maps/Maps';

const MainNavigator = createStackNavigator (
    {
        Home: { 
                screen: HomeScreen, 
                navigationOptions: {
                    title: 'MERCHANT',
                    headerTitleAlign: 'center',
                    headerRight: () => <Text></Text>,
                    headerStyle: {
                        backgroundColor: 'white',
                        height: 50,
                    },
                    headerTitleStyle: {
                        fontSize: 15,
                        fontWeight:'bold',
                        color: '#46525F'
                    },
                }
    },
        EditProfile: { screen: EditProfile },
        Maps: { screen: MapsScreen }
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(MainNavigator);