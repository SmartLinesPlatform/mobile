import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = ({ navigation }: { navigation: any }) => {
    const [email, onChangeEmail] = React.useState("E-mail");
    const [password, onChangePassword] = React.useState("Password");

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/img/smartLine.svg')} style={styles.img} />
            <TextInput style={styles.input} onChangeText={onChangeEmail} value={email} />
            <TextInput style={styles.input} onChangeText={onChangePassword} value={password} />
            <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Esqueceu a senha!')}>
                <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpNow} onPress={() => navigation.navigate("CriarConta")}>
                <Text style={styles.signUpNowText}>Sign Up Now!</Text>
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
    img: {
        alignItems: 'center',
        width: 207,
        height: 123,
        marginTop: 50,
        marginBottom: 30,
        marginLeft: 70,
        marginRight: 70,
    },
    input: {
        fontSize: 24,
        color: '#FABB04',
        marginTop: 20,
        borderRadius: 5,
        height: 50,
        width: 320,
        borderWidth: 2,
        borderColor: "#fff",
        alignItems: 'center',
    },
    signIn: {
        marginTop: 30,
        borderRadius: 5,
        width: 300,
        height: 54,
        alignItems: 'center',
        borderWidth: 3.5,
        borderColor: '#FABB04',
    },
    signInText: {
        fontSize: 24,
        color: "#FABB04",
        padding: 10,
    },
    forgotText: {
        marginTop: 30,
        fontSize: 18,
        color: "#fff",
        textDecorationLine: "underline",
    },
    signUpNow: {
        backgroundColor: "#FABB04",
        marginTop: 30,
        borderRadius: 5,
        width: 300,
        alignItems: 'center',

    },
    signUpNowText: {
        fontSize: 24,
        color: "#fff",
        padding: 10,
    },
    scrollView: {
        overflow: "scroll",
    },
});

export default Login;