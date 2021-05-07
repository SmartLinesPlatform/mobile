 import React from 'react';
 import { createStackNavigator } from "react-navigation-stack";
import Fila from '../screens/Fila';
import Header from '../shared/Header';
const screens = {
    Fila: {
        screen: Fila,
        navigationOptions: ({ navigation } : {navigation: any}) => {
            return {
                headerTitle: () => <Header navigation={navigation}/>,
            };
        },
    },
};

const FilaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#111",
        headerStyle: { backgroundColor: "#094067", height: 80 },
    },
});

export default FilaStack;