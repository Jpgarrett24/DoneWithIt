import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const LoginScreen = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <Screen>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                placeholder="Email"
                textContentType="emailAddress"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={text => setPassword(text)}
                placeholder="password"
                secureTextEntry
                textContentType="password"
            />
            <AppButton title="Login" onPress={() => console.log(email, password)} />
        </Screen>
    );
};

export default LoginScreen

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})
