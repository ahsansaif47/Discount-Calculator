import  React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';


export default function App() {

  const [price, setPrice] = useState("")
  const [disc, setDisc] = useState("")
  const [fPrice, setfPrice] = useState("")
  const [youSave, setSave] = useState("")

  const priceAfter_discount = (price, discount) => {
    setfPrice((price) - (price * (discount / 100)))
    setSave((price * (discount / 100)))
  }

  return (
    <View style={styles.container}>
      <Text>Enter Price: </Text>
      <TextInput style = {styles.input}
        keyboard = 'numeric'
        placeholder = "Enter Some Price.."
        onChangeText={price => setPrice(price)}
      />
      <Text>Enter Discount: </Text>
      <TextInput style = {styles.input}
        keyboard = 'numeric'
        placeholder = "Enter Some Discount.."
        onChangeText={disc => setDisc(disc)}
      />

      <Button title = "Calculate" 
        onPress = {() => priceAfter_discount(price, disc)}> 
      </Button>
      <Text>You Saved: {youSave}</Text>
      <Text>Final Price: {fPrice}</Text>
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
