import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  price: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addCartItem: (state, action) => {
      let item = action.payload;
      if (
        state.cartItems.length > 0 &&
        state.cartItems.some(
          (cartItem) =>
            cartItem.id === item.id && cartItem.chosenColor === item.chosenColor
        )
      ) {
        const cartItem = state.cartItems.find(
          (cartItem) => cartItem.id === item.id
        );

        if (cartItem.amount + item.amount <= cartItem.stock)
          cartItem.amount = cartItem.amount + item.amount;
        return;
      }
      state.cartItems.push(item);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem.amount === cartItem.stock) return;
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem.amount === 1) {
        return;
      }
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.unitPrice;
      });
      state.amount = amount;
      state.price = total;
    },
  },
});

const selectItems = (state) => state.cart.cartItems;

export const selectTotalAmount = createSelector([selectItems], (items) =>
  items.reduce((amount, item) => amount + item.amount, 0)
);

export const selectTotalPrice = createSelector([selectItems], (items) =>
  items.reduce((price, item) => price + item.unitPrice * item.amount, 0)
);

export const {
  clearCart,
  addCartItem,
  increase,
  decrease,
  calculateTotals,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
