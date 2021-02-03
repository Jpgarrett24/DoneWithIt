import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'

import AppActivityIndicator from '../components/AppActivityIndicator';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Card from "../components/Card";
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

const ListingsScreen = ({ navigation }) => {
    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
        getListingsApi.request();
    }, []);

    return (
        <Screen style={styles.screen}>
            {getListingsApi.error && <>
                <AppText>Couldn't retrieve the listings.</AppText>
                <AppButton title="Retry" onPress={loadListings} />
            </>}
            <AppActivityIndicator visible={getListingsApi.loading} />
            <FlatList
                data={getListingsApi.data}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                }
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.lightgrey,
    }
})

export default ListingsScreen

