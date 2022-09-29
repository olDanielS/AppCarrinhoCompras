import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../contexts';
import Products from '../../components/Products';

export default function Home() {
  const {cart, addItemCart} = useContext(CartContext);

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {id: '1',
    name: "Coca Cola",
    price: 5.50
  },
    {id: '2',
    name: "Chocolate",
    price: 10.50
  },
    {id: '3',
    name: "Queijo",
    price: 7.0
  },
    {id: '4',
    name: "Presunto",
    price: 6.20
  },
    {id: '5',
    name: "Guarana Antartica",
    price: 5.0
  }
  ])

  function handleAddCart(item){
    addItemCart(item)
  }

 return (
  <SafeAreaView style={styles.container}>
    <View style={styles.cartArea}>   
          <Text style={styles.title}>Lista de produtos</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Feather name="shopping-cart" size={30} color="#000"/>
            <Text style={styles.statusCart}>{cart.length}</Text>  
          </TouchableOpacity>
    </View>
    <FlatList
      data={products}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <Products data={item} addCart={() => handleAddCart(item)}/>}
    />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingEnd: 14,
    paddingStart: 14

  },
  cartArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 24
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  statusCart: {
    backgroundColor: '#FF7425',
    color: '#FFF',
    borderRadius: 15,
    width: 20,
    height: 20,
    textAlign: 'center',
    position: 'absolute',
    zIndex: 99,
    top: 10

  }
})