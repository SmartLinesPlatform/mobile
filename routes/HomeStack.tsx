import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import Home from '../screens/Home';
import Header from "../shared/Header";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation } : {navigation: any}) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            };
        },
    },
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#111",
        headerStyle: { backgroundColor: "#094067", height: 80 },
    },
});

export default HomeStack;