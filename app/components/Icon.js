import React from 'react'
import { StyleSheet, View } from 'react-native'

import { MaterialCommunityIcons } from "@expo/vector-icons"

const Icon = ({ name, size = 40, backgroundColor = "#000", iconColor = "#fff" }) => {
    const styles = StyleSheet.create({
        icon: {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center",
        }
    })

    return (
        <View style={styles.icon}>
            <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
        </View>
    );
};


export default Icon