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
        width: "90%",
        height: 300,
        borderRadius: 30,
        backgroundColor: colors.white,
        marginTop: 50,
    },
    details: {
        marginLeft: 25,
        marginTop: 20,
    },
    image: {
        width: "100%",
        height: "65%",
        resizeMode: "cover",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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