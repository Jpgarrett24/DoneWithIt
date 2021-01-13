import React from 'react';
import { View, Image, SafeAreaView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from '../config/colors';

const ViewImageScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={35} color={colors.white} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={35} color={colors.white} />
            </View>
            <Image resizeMode="contain" source={require("../assets/chair.jpg")} style={styles.image} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    closeIcon: {
        height: 50,
        width: 50,
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteIcon: {
        height: 50,
        width: 50,
        position: "absolute",
        top: 40,
        right: 30,
    },
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    image: {
        height: "100%",
        width: "100%",
    }
});


export default ViewImageScreen;