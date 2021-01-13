import React from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';

import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from '../config/colors';

const ListItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.lightgrey}
                onPress={onPress}
            >
                <View style={styles.container}>
                    <Image source={image} style={styles.image} />
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{subTitle}</Text>
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
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginRight: 10,
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