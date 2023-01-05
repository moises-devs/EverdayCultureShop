import { createSlice } from "@reduxjs/toolkit";
const defaultWishList = {
  wishes: [],
};

const wishSlice = createSlice({
  name: "wishlist",
  initialState: defaultWishList,
  reducers: {
    toggleWish(state, action) {
      let copy = state.wishes.find((item) => item.id === action.payload.id);
      let updatedWishList;
      if (copy) {
        updatedWishList = state.wishes.filter(item => item.id !== copy.id)
      } else {
        updatedWishList = [action.payload, ...state.wishes];
      }

      return { wishes: updatedWishList };
    },
    removeWish(state, action) {
      let updatedArr = state.wishes.filter(
        (wish) => wish.id !== action.payload
      );
      return { wishes: updatedArr };
    },
    emptyWishes(state, action) {
      state.wishes = [];
    }
  },
});

export const { toggleWish, removeWish, emptyWishes } = wishSlice.actions;
export default wishSlice;
