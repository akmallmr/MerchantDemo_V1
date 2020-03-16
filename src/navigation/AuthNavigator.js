import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import Register from '../Pages/Auth/Components/Register/Register'
import SignIn from '../Pages/Auth/Components/Signin/Signin'

const AuthNavigator = createStackNavigator(
{
    Register: {screen: Register },
    SignIn: {screen: SignIn }
},
{
    headerMode:"none",
    initialRouteKey:"Register"
}
)

export default AuthNavigator