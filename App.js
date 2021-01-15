import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  SafeAreaView,
} from 'react-native';
import colors from './app/config/colors';
import AccountScreen from './app/screens/AccountScreen';

const App = () => {
  return (
    <>
      <AccountScreen />
    </>
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

