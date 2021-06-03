import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './Drawer';
import Login from '../screens/Login';
import CriarConta from '../screens/CriarConta';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='Login' headerMode='none'>
        <Screen name="Login" component={Login} />
        <Screen name="CriarConta" component={CriarConta} />
        <Screen name="Drawer" component={Drawer} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
