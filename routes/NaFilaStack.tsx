import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import NaFila from '../screens/NaFila';
import Header from '../shared/Header';
const screens = {
   NaFila: {
       screen: NaFila,
       navigationOptions: ({ navigation } : {navigation: any}) => {
           return {
               headerTitle: () => <Header navigation={navigation}/>,
           };
       },
   },
};

const NaFilaStack = createStackNavigator(screens, {
   defaultNavigationOptions: {
       headerTintColor: "#111",
       headerStyle: { backgroundColor: "#4285F4", height: 80 },
   },
});

export default NaFilaStack;