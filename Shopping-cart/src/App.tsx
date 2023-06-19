import { useState } from "react";
import { useQuery } from "react-query";
// import axios from "axios";

import Item from "./Items/Item"
import Cart from "./Cart/Cart";

import { Drawer, LinearProgress, Grid, Badge } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import { Wrapper, StyledButton } from "./App.Style";

export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number
}

const getProducts = async (): Promise<CartItemType[]> => 
      await (await fetch('https://fakestoreapi.com/products')).json();

 function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const[cartItems, setCartItems] = useState([] as CartItemType[]);
  const {data,isLoading,error} = useQuery<CartItemType[]>('products', getProducts);
  
  const getTotalItems = (items : CartItemType[]) => {
    return items.reduce((ack : number, item) => ack + item.amount, 0)
  };

  const handleAddToCart = (clickedItem : CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if(isItemInCart){
        return prev.map((item) => {
          if(item.id === clickedItem.id){
            return {...item, amount: item.amount + 1};
          } else {
            return item;
          }
          
        });
      }

      return [...prev, {...clickedItem, amount : 1}];

    })
  };

  const handleRemoveFromCart = (id:number) => {
    setCartItems((prev) => {
      return (
        prev.reduce((ack, item) => {
          if (item.id === id) {
            if (item.amount === 1) {
              return ack;
            }
            return [...ack, { ...item, amount: item.amount - 1 }];
          } else {
            return [...ack,item];
          }
        }, [] as CartItemType[])
      )
    })
  };

  if(isLoading){
    return <LinearProgress />
  }
  if(error){
    return <div>Soemthing Went Wrong...</div>
  }
  
  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>
      </Drawer>

      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color= 'error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>

      <h1>Shopping Cart</h1>
      <Grid container spacing={3}>
        {data?.map( (item)=>{
          return (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          )
        })}
      </Grid>
    </Wrapper>
  )
}

export default App
