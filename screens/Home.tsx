import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../shared/Header";

const Home: React.FC = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>Near for you!</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Fila")}>
                    <Image source={require('../assets/img/burguerKing.svg')} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Fila")}>
                    <Image source={require('../assets/img/pizzaHut.svg')} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Fila")}>
                    <Image source={require('../assets/img/mcDonalds.svg')} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Fila")}>
                    <Image source={require('../assets/img/outBack.svg')} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Fila")}>
                    <Image source={require('../assets/img/spolleto.svg')} style={styles.img} />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4285F4',
    },
    logoCesupa: {
        width: 432,
        height: 75,
        left: -20,
    },
    banner_1: {
        width: "100%",
        height: "30%",
    },
    body_cesupa: {
        padding: 20,
        textAlign: "justify",
        color: "black",
        letterSpacing: 0.4,
        fontWeight: "bold",
    },
    text: {
        color: "#ffff",
        marginTop: "25px",
        marginBottom: "25px",
    },
    img: {
        alignItems: 'center',
        width: 415,
        height: 130,
    },
    absoluteView: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    scrollView: {
        overflow: "scroll",
    },
});

export default Home;
