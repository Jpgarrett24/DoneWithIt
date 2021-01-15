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
import Screen from "./app/components/Screen";
import Icon from './app/components/Icon';

const App = () => {
  return (
    <Screen>
      <Icon
        name="basketball"
        size={300}
        backgroundColor="black"
        iconColor="orange"
      />
    </Screen>
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

