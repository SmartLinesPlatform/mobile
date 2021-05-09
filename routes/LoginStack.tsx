import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import Login from '../screens/Login';
import Header from "../shared/Header";

const screens = {
    Login: {
        screen: Login,
        navigationOptions: ({ navigation } : {navigation: any}) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            };
        },
    },
};

const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#111",
        headerStyle: { backgroundColor: "#4285F4", height: 80 },
    },
});

export default LoginStack;