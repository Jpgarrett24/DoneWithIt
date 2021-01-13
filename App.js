import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  SafeAreaView,
} from 'react-native';

import Card from './app/components/Card';
import colors from './app/config/colors';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';

const App = () => {
  return (
    // <SafeAreaView style={styles.container}>
    //   <Card title="Red jacket for Sale!" subTitle="$100" image={require("./app/assets/jacket.jpg")}></Card>
    // </SafeAreaView>
    // <WelcomeScreen></WelcomeScreen>
    // <ViewImageScreen></ViewImageScreen>
    // <ListingDetailsScreen image={require('./app/assets/jacket.jpg')} title="Red jacket for sale" subTitle="$100"></ListingDetailsScreen>
    <MessagesScreen />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.lightgrey,
  }
});

export default App;

