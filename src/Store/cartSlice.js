import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        cart: [],
        totalItems:0,
        totalAmount: 0,
        isCartOpen:false
    },
    reducers: {
        addItem(state, payload) {
            let cartCopy = [...payload, state.cart];
            //run reducer method to account for total AMount
            return {
                cart:cartCopy,
                totalAmount: 0,
            }
        },
        setisCartOpen(state) {
            state.isCartOpen = !state.isCartOpen
        },
        removeItem(state, payload) {
            console.log('remove this item');
        }
    }
})

export const { addItem, setisCartOpen, removeItem } = cartSlice.actions;

export default cartSlice
