import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import FilaStack from "./FilaStack";

const RootDrawerNavigator = createDrawerNavigator({
    HOME: {
        screen: HomeStack,
    },
    FILA: {
        screen: FilaStack,
    },
});

export default createAppContainer(RootDrawerNavigator);