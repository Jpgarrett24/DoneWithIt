import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native'

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.container, style]}>
                {children}
            </View>
        </SafeAreaView>
    );
};

export default Screen;

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
    },
    container: {
        flex: 1,
    }
})
