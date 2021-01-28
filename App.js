import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


import Screen from "./app/components/Screen";
import ListingEditScreen from './app/screens/ListingEditScreen';

const App = () => {
  const [imageUris, setImageUris] = useState([]);


  return (
    <ListingEditScreen />
  );
};

const styles = StyleSheet.create({});

export default App;

