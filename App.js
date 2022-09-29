import { NavigationContainer } from "@react-navigation/native";
import Routers from "./src/routers";
import CartProvider from "./src/contexts";

export default function App(){
  return(
    <NavigationContainer>
    <CartProvider>
      <Routers/>
    </CartProvider>
    </NavigationContainer>
  )
}