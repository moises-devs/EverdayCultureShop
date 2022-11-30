import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalItems: 0,
    totalAmount: 0,
    isCartOpen: false,
  },
  reducers: {
    addItem(state, action) {
      let addedItem = action.payload;
      let newTotalItems = state.totalItems + addedItem.amount;
      let newCart = [...state.cart];
      let itemFound = state.cart.find((item) => item.id === addedItem.id);
      if (itemFound) {
        //item already in cart
        let itemIndex = state.cart.findIndex(
          (item) => item.id === addedItem.id
        );
        itemFound.amount += addedItem.amount;
        newCart[itemIndex] = itemFound;
      } else {
        newCart = [addedItem, ...state.cart];
      }
      let newTotalAmount = newCart.reduce(
        (acc, currentVal) =>
          acc + currentVal.amount * currentVal.attributes.price,
        0
      );
      state.cart = newCart;
      state.totalItems = newTotalItems;
      state.totalAmount = newTotalAmount;
    },

    setisCartOpen(state) {
      state.isCartOpen = !state.isCartOpen;
    },

    removeItem(state, action) {
      let itemId = action.payload;
      let removeItemCount = state.cart.find(
        (item) => item.id === itemId
      ).amount;
      let newCart = state.cart.filter((item) => item.id !== itemId);
      state.cart = newCart;
      let newTotalAmount = newCart.reduce(
        (acc, currentVal) =>
          acc + currentVal.amount * currentVal.attributes.price,
        0
      );
      state.totalAmount = newTotalAmount;
      state.totalItems -= removeItemCount;
    },

    decreaseItem(state, action) {
      let itemId = action.payload;
      let itemFound = state.cart.find((item) => item.id === itemId);
      itemFound.amount -= 1;
      let newCart = [];
      if (itemFound.amount === 0) {
        newCart = state.cart.filter((item) => item.id !== itemId);
      } else {
        let itemIndex = state.cart.findIndex((item) => item.id === itemId);
        newCart = [...state.cart];
        newCart[itemIndex] = itemFound;
      }
      let newTotalAmount = newCart.reduce(
        (acc, currentVal) =>
          acc + currentVal.amount * currentVal.attributes.price,
        0
      );
      state.cart = newCart;
      state.totalAmount = newTotalAmount;
      state.totalItems -= 1;
    },
  },
});

export const { addItem, setisCartOpen, removeItem, decreaseItem } =
  cartSlice.actions;

export default cartSlice;
