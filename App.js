import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import colors from './app/config/colors';

import Screen from "./app/components/Screen"
import AppPicker from './app/components/AppPicker';
import AppTextInput from "./app/components/AppTextInput";


const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const App = () => {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories} icon="apps" placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
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

