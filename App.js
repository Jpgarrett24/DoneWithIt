import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  SafeAreaView,
} from 'react-native';
import colors from './app/config/colors';

import Screen from "./app/components/Screen";

const App = () => {
  return (
    <Screen>
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

