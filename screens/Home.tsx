import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Loja from "../models/Loja";
import api from "../services/api";
import BannerDaLoja from "../shared/BannerDaLoja";
import Header from "../shared/Header";
import { baseUrl, defaultBanner } from "../utils/constants";

const Home: React.FC = () => {
    const navigation = useNavigation();
    const [lojas, setLojas] = useState([] as Loja[]);
    useEffect(() => {
        async function load() {
            const { data } = await api.get('/stores?restaurants=true&lat=-1.432459&lng=-48.455070');
            setLojas(data);
        }
        load();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                <Text style={styles.text}>Near for you!</Text>
                {lojas.map(loja => <BannerDaLoja key={loja.id} name={loja.name} src={loja.picture_url === '' ? defaultBanner : `${baseUrl}/files/${loja.picture_url}`} id={loja.id} />)}
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#4285F4',
        alignItems: "center"
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
    }
});

export default Home;
