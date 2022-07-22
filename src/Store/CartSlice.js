import {configureStore,createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: { 
        itemsList: [],
        totalQuntitY :0,
        showCart: false
     },
    reducers: {
        addToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === newItem.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.itemsList.push({
                  id: newItem.id,
                  price: newItem.price,
                  quantity: 1,
                  totalPrice: newItem.price,
                  name: newItem.name
                });
                state.totalQuntitY++;
              } 

        },
        removeFromCart(state, action){
            const id = action.payload;

            const existingItem = state.itemsList.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
              state.itemsList = state.itemsList.filter((item) => item.id !== id);
              state.totalQuntitY--;
            } else {
              existingItem.quantity--;
              existingItem.totalPrice -= existingItem.price;
            }
        },
        setShowCart(state){
            state.showCart = true;
        },
        deleteFromCart(state,action){
            const id = action.payload;
            const remainingItems = state.itemsList.filter((item) => item.id !== id);
            state.totalQuntitY--;
            state.itemsList = remainingItems;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;