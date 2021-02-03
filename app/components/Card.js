import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import AppText from "./AppText";
import colors from '../config/colors';

const Card = ({ title, subTitle, imageUrl, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <View style={styles.details}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.subTitle} numberOfLines={1}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
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