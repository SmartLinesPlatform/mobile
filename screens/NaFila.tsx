import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NaFila = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={styles.container}>
                <Text style={styles.posicao}>Current Position</Text>
                <Text style={styles.numero}>15</Text>
                <Text style={styles.contagem}>Estimated Time: 03 minutes</Text>
                <TouchableOpacity style={styles.giveUp} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.giveUpText}>Give Up</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Maybe this interest you:</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/img/centauro.svg')} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/img/magalu.svg')} style={styles.img} />
                </TouchableOpacity>
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
    text: {
        alignItems: "baseline",
        fontWeight: 'bold',
        fontSize: 20,
        color: "#ffff",
        marginTop: "25px",
        marginBottom: "25px",
    },
    img: {
        alignItems: 'center',
        width: 415,
        height: 130,
        marginBottom: 20,
    },
});

export default NaFila;