import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna. Eget mi proin sed libero enim sed faucibus. Leo urna molestie at elementum eu facilisis. Ipsum nunc aliquet bibendum enim facilisis. Gravida neque convallis a cras semper. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Viverra aliquet eget sit amet tellus. Vestibulum lectus mauris ultrices eros. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Tellus in metus vulputate eu. Ornare quam viverra orci sagittis eu. Quam adipiscing vitae proin sagittis.',
        description: 'Et netus et malesuada fames ac turpis. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Porttitor rhoncus dolor purus non. Lacus luctus accumsan tortor posuere. Tristique magna sit amet purus gravida quis blandit turpis cursus. Bibendum est ultricies integer quis auctor elit sed. Amet consectetur adipiscing elit pellentesque habitant morbi. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Elementum tempus egestas sed sed. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Eget arcu dictum varius duis at consectetur lorem. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Faucibus et molestie ac feugiat sed lectus.',
        image: require("../assets/mosh.jpg")
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require("../assets/mosh.jpg")
    }
]

const MessagesScreen = (props) => {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // Delete message from messages array
        setMessages(messages.filter((m) => m.id !== message.id));

        // Call server to delete from backend
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        }
                        showChevrons={true}
                    />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => { setMessages(initialMessages) }}
            />
        </Screen>
    );
};

export default MessagesScreen

const styles = StyleSheet.create({
})
