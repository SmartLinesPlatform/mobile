import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Loja from "../models/Loja";
import api from "../services/api";
import BannerDaLoja from "../shared/BannerDaLoja";
import Header from "../shared/Header";
import { baseUrl, defaultBanner, userId } from "../utils/constants";

const NaFila = () => {
    const navigation = useNavigation();
    const [currentPosition, setCurrentPosition] = useState(0);
    const [lojas, setLojas] = useState([] as Loja[]);
    useEffect(() => {
        async function load() {
            const { data } = await api.post('/customers/current-position-in-line', {
                customer_id: userId
            });
            console.log(data);
            setCurrentPosition(data.position);

            const { data: dataLojas } = await api.get('/stores?partners=true&lat=-1.432459&lng=-48.455070');
            setLojas(dataLojas);
        }
        load();
    }, []);

    const giveUp = useCallback(async () => {
        const { data } = await api.post(`/customers/give-up-position-in-line`, {
            customer_id: userId,
        });

        navigation.navigate("Home")

        console.log(data);
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Text style={styles.posicao}>Current Position</Text>
            <Text style={styles.numero}>{currentPosition}</Text>
            <Text style={styles.contagem}>Estimated Time: {currentPosition * 3} minutes</Text>
            <TouchableOpacity style={styles.giveUp} onPress={giveUp}>
                <Text style={styles.giveUpText}>Give Up</Text>
            </TouchableOpacity>
            <ScrollView style={{ width: '100%' }}>
                <Text style={styles.text}>Maybe this interest you:</Text>
                {lojas.map(loja => <BannerDaLoja onClick={() => Linking.openURL(loja.website_url)} key={loja.id} name={loja.name} src={loja.picture_url === '' ? defaultBanner : `${baseUrl}/files/${loja.picture_url}`} id={loja.id} />)}
            </ScrollView>
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
        width: '100%',
        height: 130,
        marginBottom: 20,
    },
});

export default NaFila;

