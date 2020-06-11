import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';

import SplashScreen from '../Pages/SplashScreen/Splash';

const SplashNavigator = createStackNavigator({
  Gogogo: {screen: SplashScreen},
});

export default SplashNavigator;
