import  React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import AppNavigator from './src/navigation/router'

class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
              <StatusBar backgroundColor="white" barStyle="dark-content"/>
              <AppNavigator />
            </View>
        )
    }
}

export default App;