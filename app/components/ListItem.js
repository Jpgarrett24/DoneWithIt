import React from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';

import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from '../config/colors';

const ListItem = ({ title, subTitle, image, IconComponent, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500',
        fontSize: 15,
        marginBottom: 2.5,
    },
    subTitle: {
        color: colors.medium,
        fontSize: 15,
    }
});

export default ListItem;