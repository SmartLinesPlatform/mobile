import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import Header from "../shared/Header";
import { userId } from "../utils/constants";

interface routeParams {
    id: string;
}

const Fila: React.FC = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { id } = route.params as routeParams;
    const [lineId, setLineId] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
        async function load() {

            const { data: dataUser } = await api.get(`/customers/${userId}`);

            if (dataUser.is_in_line) {
                navigation.navigate("NaFila");
            } else {
                const { data } = await api.get(`/stores/${id}`);
                setLineId(data.lines.attendance_line_id);
                const { data: dataLine } = await api.get(`/lines/${data.lines.attendance_line_id}`);
                setCurrentPosition(dataLine.orders.length);
            }

        }
        load();
    }, [id]);

    const enterLine = useCallback(async () => {
        const { data } = await api.post(`/customers/enter-in-line`, {
            customer_id: userId,
            store_id: id
        });

        navigation.navigate("NaFila")

        console.log(data);
    }, [id])

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Text style={styles.posicao}>Current Position</Text>
            <Text style={styles.numero}>{currentPosition}</Text>
            <Text style={styles.contagem}>Estimated Time: {currentPosition * 3} minutes</Text>
            <TouchableOpacity style={styles.enterLine} onPress={enterLine}>
                <Text style={styles.enterLineText}>Enter Line</Text>
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
