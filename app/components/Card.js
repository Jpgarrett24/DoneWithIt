import React from 'react';
import { View, Image, Text, StyleSheet, Platform } from 'react-native'

import colors from '../config/colors';

const Card = ({ title, subTitle, image }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    details: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    subTitle: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.secondary
    },
    title: {
        fontSize: 18,
    },
})


export default Card;