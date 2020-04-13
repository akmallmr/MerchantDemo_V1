import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import HomeScreen from '../Pages/Home/Home';
import EditProfile from '../Pages/Home/EditProfile/EditProfile';
import ScanqrScreen from '../Pages/ScanQR/ScanQR';
import MapsScreen from '../Pages/Maps/Maps';
import CreateVoucherScreen from '../Pages/CreateVoucher/CreateVoucher';

import RegisterProduct from '../navigation/RegisterProductNavigator';
import RegisterProductNavigator from '../navigation/RegisterProductNavigator';

const MainNavigator = createStackNavigator (
    {
        Home: { 
                screen: HomeScreen, 
                navigationOptions: {
                    headerShown: false,
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
        EditProfile: { 
                screen: EditProfile,
                navigationOptions: {
                    headerShown: false
                }
        },
        Maps: { 
                screen: MapsScreen,
                navigationOptions: {
                    headerShown: false
                }
        },
        RegisterProduct: {
            screen: RegisterProductNavigator,
            navigationOptions: {
                headerShown: false
            }
        },
        CreateVoucher: {
            screen: CreateVoucherScreen,
            navigationOptions: {
                headerShown: false
            }        
        },
        Scanqr: { 
                screen: ScanqrScreen,
                navigationOptions: {
                    headerShown: false
                }
        },
        
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(MainNavigator);