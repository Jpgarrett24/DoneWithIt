import React, { useContext } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: routes.MESSAGES,
    }
]

const AccountScreen = ({ navigation }) => {
    const { user, setUser } = useContext(AuthContext);

    const handleLogOut = () => {
        setUser(null);
        authStorage.removeToken()
    }

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require("../assets/mosh.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            showChevrons={true}
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#6d72ff" />}
                showChevrons={true}
                onPress={handleLogOut}
            />
        </Screen>
    );
};

export default AccountScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.lightgrey
    },
    container: {
        marginVertical: 20,
    },
})
