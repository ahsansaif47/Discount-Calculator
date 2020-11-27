import  React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

export default function App() {

  const [price, setPrice] = useState("")
  const [disc, setDisc] = useState("")

  return (
    <View style={styles.container}>
      <Text>Enter Price: </Text>
      <TextInput style = {styles.input}
        keyboard = 'numeric'
        placeholder = "Price.."
        onChangeText={price => setPrice(price)}
      />
      <Text>Enter Discount: </Text>
      <TextInput style = {styles.input}
        keyboard = 'numeric'
        placeholder = "Discount.."
        onChangeText={price => setPrice(price)}
      />

      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: 150,
  }
});