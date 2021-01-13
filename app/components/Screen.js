import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'

const Screen = ({ children }) => {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
};

export default Screen;

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})
