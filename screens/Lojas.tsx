import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Lojas = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>Nossas lojas parceiras!</Text>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.burgerking.com.br/')}>
                    <Image source={require('../assets/logos/burgerKingLogo.jpg')} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.pizzahut.com.br/')}>
                    <Image source={require('../assets/logos/pizzaHutLogo.jpg')} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.mcdonalds.com.br/')}>
                    <Image source={require('../assets/logos/mcDonaldsLogo.jpg')} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.outback.com.br/')}>
                    <Image source={require('../assets/logos/outBackLogo.jpg')} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.spoleto.com.br/tabs/cardapioapp')}>
                    <Image source={require('../assets/logos/spoletoLogo.png')} style={styles.img} />
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