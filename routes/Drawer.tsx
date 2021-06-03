import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Fila from '../screens/Fila';
import NaFila from '../screens/NaFila';
import Lojas from '../screens/Lojas';

const { Navigator, Screen } = createDrawerNavigator();

const Drawer: React.FC = () => {
    return (
        <Navigator initialRouteName="Home" >
            <Screen name="Home" component={Home} />
            <Screen name="Fila" component={Fila} />
            <Screen name="NaFila" component={NaFila} />
            <Screen name="Lojas" component={Lojas} />
        </Navigator>
    )
}

export default Drawer;

// import { createDrawerNavigator } from "react-navigation-drawer";
// import { createAppContainer } from "react-navigation";
// import HomeStack from "./HomeStack";
// import FilaStack from "./FilaStack";
// import NaFilaStack from "./NaFilaStack";
// import LoginStack from "./LoginStack";
// import CriarContaStack from "./CriarContaStack";
// import LojasStack from "./LojasStack";

// const RootDrawerNavigator = createDrawerNavigator({
//     LOGIN:{
//         screen: LoginStack,
//     },
//     CRIARCONTA:{
//         screen: CriarContaStack,
//     },
//     HOME: {
//         screen: HomeStack,
//     },
//     FILA: {
//         screen: FilaStack,
//     },
//     NAFILA: {
//         screen: NaFilaStack,
//     },
//     LOJAS: {
//         screen: LojasStack,
//     }
// });

// export default createAppContainer(RootDrawerNavigator);
