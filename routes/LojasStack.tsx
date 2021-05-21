import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import Lojas from '../screens/Lojas';
import Header from "../shared/Header";

const screens = {
    Lojas: {
        screen: Lojas,
        navigationOptions: ({ navigation } : {navigation: any}) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            };
        },
    },
};

const LojasStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#111",
        headerStyle: { backgroundColor: "#4285F4", height: 80 },
    },
});

export default LojasStack;