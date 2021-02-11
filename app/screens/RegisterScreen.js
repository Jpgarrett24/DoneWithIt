import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup';

import Screen from "../components/Screen";
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from "../components/forms/index";
import useAuth from '../auth/useAuth';
import authApi from '../api/auth';
import usersApi from '../api/users';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

const RegisterScreen = () => {
    const auth = useAuth();
    const [error, setError] = useState(null);

    const handleSubmit = async (userInfo) => {
        const result = await usersApi.register(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError("An unexpected error occured.");
                console.log(result);
            }
            return;
        }

        const { data: authToken } = await authApi.login(
            userInfo.email,
            userInfo.password
        );
        auth.logIn(authToken);
    }

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={validationSchema}
            >
                <ErrorMessage error={error} visible={error} />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                    textContentType="name"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="REGISTER" />
            </AppForm>
        </Screen>
    );
};

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
