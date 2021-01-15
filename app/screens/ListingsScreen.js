import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import colors from '../config/colors';
import Screen from "../components/Screen";
import Card from "../components/Card";

const listings = [
    {
        id: 1,
        title: "Red Jacket for sale",
        price: 100,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 450,
        image: require("../assets/couch.jpg")
    }
]

const ListingsScreen = () => {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.lightgrey
    }
})

export default ListingsScreen

