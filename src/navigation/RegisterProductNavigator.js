import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';

import RegisterProductScreen from '../Pages/RegisterProduct/RegisterProduct';
import AddRegisterProductScreen from '../Pages/RegisterProduct/AddRegisterProduct/AddRegProd';

const RegisterProductNavigator = createStackNavigator(
  {
    RegisterProduct: {
      screen: RegisterProductScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AddRegisterProd: {
      screen: AddRegisterProductScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'RegisterProduct',
    defaultNavigationOptions: {
      gestureDirection: 'horizontal',
      gestureEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);

export default RegisterProductNavigator;
