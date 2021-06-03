import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Loja from "../models/Loja";
import api from "../services/api";
import BannerDaLoja from "../shared/BannerDaLoja";
import Header from "../shared/Header";
import { baseUrl, defaultBanner } from "../utils/constants";

const Lojas = () => {
    const navigation = useNavigation();
    const [lojas, setLojas] = useState([] as Loja[]);
    useEffect(() => {
        async function load() {
            const { data } = await api.get('/stores?partners=true&lat=-1.432459&lng=-48.455070');
            setLojas(data);
        }
        load();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>Nossas lojas parceiras!</Text>
                {lojas.map(loja => <BannerDaLoja onClick={() => Linking.openURL(loja.website_url)} key={loja.id} name={loja.name} src={loja.picture_url === '' ? defaultBanner : `${baseUrl}/files/${loja.picture_url}`} id={loja.id} />)}
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
        marginLeft: '10px',
        marginBottom: "25px",
    },
    img: {
        alignItems: 'center',
        width: 415,
        height: 130,
        marginBottom: 5,
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

export default Lojas;
