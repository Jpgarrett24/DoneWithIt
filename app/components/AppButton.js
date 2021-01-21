import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

const AppButton = ({ title, color = "primary", onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "100%",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontWeight: "700",
        fontSize: 20,
    }
})


export default AppButton;