import React, { useState } from 'react';
import { StyleSheet } from 'react-native';


import colors from './app/config/colors';
import LoginScreen from './app/screens/LoginScreen';

const App = () => {
  return (
    <LoginScreen />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.lightgrey,
  },
});

export default App;

