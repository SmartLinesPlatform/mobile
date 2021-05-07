import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Fila = ({navigation}: {navigation: any}) => {
    return (
        <View style={styles.container}>
            <Text>Aqui é a fila</Text>
        </View>
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
});

export default Fila;