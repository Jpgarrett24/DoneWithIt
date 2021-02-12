import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors';
import ListItem from '../components/ListItem';
import ContactSellerForm from '../components/ContactSellerForm';


const ListingDetailsScreen = ({ user, profilepic, listings, route }) => {
    const listing = route.params;

    const handleSubmit = () => console.log('Submitted');

    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
            <View>
                <Image
                    style={styles.image}
                    preview={{ uri: listing.images[0].thumbnailUrl }}
                    tint='light'
                    uri={listing.images[0].url}
                />
                <View style={styles.itemDetails}>
                    <Text style={styles.title}>{listing.title}</Text>
                    <Text style={styles.subTitle}>${listing.price}</Text>
                </View>
                <View style={styles.userContainer}>
                    <ListItem image={require("../assets/mosh.jpg")} title="Mosh Hamedani" subTitle="5 Listings" />
                </View>
                <View style={styles.form}>
                    <ContactSellerForm listing={listing} />
                </View>
            </View>
        </ KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 10,
    },
    image: {
        height: 300,
        width: "100%",
    },
    itemDetails: {
        paddingLeft: 25,
        paddingTop: 25,
        marginBottom: 35,
    },
    subTitle: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.secondary
    },
    title: {
        fontSize: 20,
    },
    userContainer: {
        marginLeft: 25,
    }
});

export default ListingDetailsScreen;