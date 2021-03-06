import React from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from '../config/colors';
import AppText from "./AppText";

const ListItem = ({ title, subTitle, image, IconComponent, onPress, renderRightActions, showChevrons = false }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.black} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    {showChevrons && <MaterialCommunityIcons name="chevron-right" color={colors.medium} size={25} style={{ justifyContent: "flex-end" }} />}
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
        alignItems: "center"
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
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