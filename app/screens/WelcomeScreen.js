import React from 'react'
import { ImageBackground, Image, View, Text, StyleSheet, Platform } from 'react-native';

import AppButton from '../components/AppButton';

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.background}
            blurRadius={Platform.OS === "android" ? 2 : 10}
        >
            <View style={styles.header}>
                <Image source={require("../assets/logo-red.png")} style={styles.logo} />
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate("Register")} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    header: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    buttonsContainer: {
        padding: 20,
        width: "100%"
    },
    text: {
        paddingTop: 20,
        fontSize: 23,
        fontWeight: Platform.OS === "android" ? "bold" : "500",
    },
    logo: {
        width: 100,
        height: 100,
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ECDC4",
    }
})


export default WelcomeScreen;