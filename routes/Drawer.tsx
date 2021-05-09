import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import FilaStack from "./FilaStack";
import NaFilaStack from "./NaFilaStack";
import LoginStack from "./LoginStack";
import CriarContaStack from "./CriarContaStack";

const RootDrawerNavigator = createDrawerNavigator({
    LOGIN:{
        screen: LoginStack,
    },
    CRIARCONTA:{
        screen: CriarContaStack,
    },
    HOME: {
        screen: HomeStack,
    },
    FILA: {
        screen: FilaStack,
    },
    NAFILA: {
        screen: NaFilaStack,
    }
});

export default createAppContainer(RootDrawerNavigator);