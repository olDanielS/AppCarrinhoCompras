import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Products({data, addCart}) {
 return (
   <View style={styles.container}> 
    <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>{data.price}</Text>
    </View>
    <TouchableOpacity style={styles.btnAdd} onPress={addCart}>
        <Text style={styles.btnTextAdd}>+</Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        marginBottom: 10,
        padding: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16
    },
    btnAdd: {
        backgroundColor: '#6eafff',
        width: 30,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    btnTextAdd: {
        fontSize: 20
    }
})