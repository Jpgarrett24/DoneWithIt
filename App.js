import React from 'react';
import { StyleSheet } from 'react-native';
import colors from './app/config/colors';

import ListingsScreen from "./app/screens/ListingsScreen";

const App = () => {
  return (
    <>
      <ListingsScreen />
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

