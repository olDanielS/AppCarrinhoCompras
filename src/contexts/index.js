import React, {useState, createContext} from 'react';
import { View } from 'react-native';


export const CartContext = createContext({});

function CartProvider({children}){
    const [cart, setCart] = useState([
    ])

    function addItemCart(newItem){
        const indexItem = cart.findIndex(item => item.id === newItem.id) //Verificar se já existe um id. Se não existir retorna -1

        if(indexItem !== -1){
            let cartList = cart;
            cartList[indexItem].ammout = cartList[indexItem].ammout + 1
            cartList[indexItem].total = cartList[indexItem].ammout * cartList[indexItem].price 
            setCart(cartList)
            console.log(cartList)
            return
        }
        let data = {
            ...newItem,
            ammout: 1,
            total: newItem.price
        }
        setCart(products => [...products, data])
        console.log(...cart, data)
    }


    return(
        <CartContext.Provider value={{cart, addItemCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;