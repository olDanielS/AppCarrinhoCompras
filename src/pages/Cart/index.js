import React, {useContext} from 'react';
import { View, Text } from 'react-native';

export default function Cart() {
  const {cart} = useContext();
 return (
   <View>
        <Text>Tela de Carrinho</Text> 
   </View>
  );
}