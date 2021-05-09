import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import CriarConta from '../screens/CriarConta';
import Header from "../shared/Header";

const screens = {
    CriarConta: {
        screen: CriarConta,
        navigationOptions: ({ navigation } : {navigation: any}) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            };
        },
    },
};

const CriarContaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#111",
        headerStyle: { backgroundColor: "#4285F4", height: 80 },
    },
});

export default CriarContaStack;