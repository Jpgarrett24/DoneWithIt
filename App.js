import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";

const App = () => {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri])
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((image) => image !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default App;

