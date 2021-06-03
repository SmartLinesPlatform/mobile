import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../shared/Header";

const Fila: React.FC = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Text style={styles.posicao}>Current Position</Text>
            <Text style={styles.numero}>15</Text>
            <Text style={styles.contagem}>Estimated Time: 25 minutes</Text>
            <TouchableOpacity style={styles.enterLine} onPress={() => navigation.navigate("NaFila")}>
                <Text style={styles.enterLineText}>Enter Line</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.giveUp} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.giveUpText}>Give Up</Text>
            </TouchableOpacity>

            <Image source={require('../assets/img/fila.svg')} style={styles.img} />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4285F4',
        alignItems: "center",
    },
    posicao: {
        maxWidth: 150,
        fontSize: 36,
        fontWeight: 'bold',
        color: "#fff",
        marginTop: 50,
    },
    numero: {
        maxWidth: 150,
        fontSize: 50,
        fontWeight: 'bold',
        color: "#FABB04",
        marginTop: 20,
    },
    contagem: {
        maxWidth: 200,
        fontWeight: 'bold',
        color: "#FABB04",
        marginTop: 20,
        marginBottom: 20,
    },
    enterLine: {
        backgroundColor: "#FABB04",
        marginTop: 20,
        borderRadius: 5,
        width: 300,
        alignItems: 'center',

    },
    enterLineText: {
        fontSize: 24,
        color: "#fff",
        padding: 10,
    },
    giveUp: {
        marginTop: 20,
        borderRadius: 5,
        width: 300,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FABB04',
    },
    giveUpText: {
        fontSize: 24,
        color: "#FABB04",
        padding: 10,
    },
    img: {
        position: "absolute",
        bottom: 0,
        alignItems: 'center',
        width: '100%',
        height: 130,

    },
});

export default Fila;
