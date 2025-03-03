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
      } else if (
        state.cartItems.length > 0 &&
        state.cartItems.some(
          (cartItem) =>
            cartItem.id === item.id &&
            cartItem.chosenColor === item.chosenColor &&
            cartItem.amount + item.amount < cartItem.stock
        )
      ) {
        state.cartItems.push(item);
        return;
      }
      state.cartItems.push(item);
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) =>
          !(item.id === payload.id && item.chosenColor === payload.chosenColor)
      );
      console.log(payload.chosenColor);
    },
    increase: (state, { payload }) => {
      const sameCartItems = state.cartItems.filter(
        (item) => item.id === payload.id
      );

      const cartItemsAmount = sameCartItems.reduce(
        (amount, item) => amount + item.amount,
        0
      );
      const cartItem = state.cartItems.find(
        (item) =>
          item.id === payload.id && item.chosenColor === payload.chosenColor
      );
      if (cartItemsAmount === cartItem.stock) {
        return;
      }
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item) =>
          item.id === payload.id && item.chosenColor === payload.chosenColor
      );
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
  items.reduce((price, item) => price + item.price * item.amount, 0)
);

export const selectItemsById = (id) =>
  createSelector(
    (state) => state.cart.cartItems,
    (cartItems) => cartItems.filter((item) => item.id === id)
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
