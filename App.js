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
      <View style={styles.header}>
        <Text>Discount Calculaor</Text>
      </View>
      <View style = {styles.innerContainer}>
        <Text>Enter Price: </Text>
        <TextInput style = {styles.input}
          keyboardType = 'numeric'
          placeholder = "Price goes here.."
          onChangeText={price => setPrice(price)}
        />
        <Text>Enter Discount: </Text>
        <TextInput style = {styles.input}
          keyboardType = 'numeric'
          placeholder = "Discount goes here.."
          onChangeText={disc => setDisc(disc)}
        />
      </View>  
      <View>
        <Button title = "Calculate Details" 
          onPress = {() => priceAfter_discount(price, disc)}>
        </Button>
        <Text>
        </Text>
        <Text>You Saved: {youSave}</Text>
        <Text>Final Price: {fPrice}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#9acd32',
    padding: 8,
  },
  innerContainer: {
    alignContent: "center",
  },
  header: {
    borderColor: "f0f",
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe4e1",
    fontSize: 40,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: 150,
  }
});
