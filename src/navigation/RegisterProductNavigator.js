import { createStackNavigator } from 'react-navigation-stack'

import RegisterProductScreen from '../Pages/RegisterProduct/RegisterProduct'

const RegisterProductScreen = createStackNavigator (
    {
        RegProd: { screen: RegisterProductScreen }
    }
)

export default RegisterProductScreen;