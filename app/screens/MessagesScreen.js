import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
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
