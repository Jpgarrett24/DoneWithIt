import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import colors from '../config/colors';
import Screen from "../components/Screen";
import Card from "../components/Card";

const listings = [
    {
        id: 1,
        title: "'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna. Eget mi proin sed libero enim sed faucibus. Leo urna molestie at elementum eu facilisis. Ipsum nunc aliquet bibendum enim facilisis. Gravida neque convallis a cras semper. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Viverra aliquet eget sit amet tellus. Vestibulum lectus mauris ultrices eros. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Eget nulla facilisi etiam dignissim diam quis enim lobortis s",
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
        backgroundColor: colors.lightgrey,
    }
})

export default ListingsScreen

