import { ProductType } from "@/types";
import { CartItemType } from "@/types/cart.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IntitialStateType = {
  cartProducts: CartItemType[];
  totalPrice: number;
  totalQuantity: number;
};

const initialState: IntitialStateType = {
  cartProducts: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart/slice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const existingItem = state.cartProducts.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartProducts = [
          ...state.cartProducts,
          { product: action.payload, quantity: 1 },
        ];
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.product.id === action.payload
      );

      if (itemIndex !== -1) {
        const removedItem = state.cartProducts[itemIndex];
        state.totalQuantity -= removedItem.quantity;
        state.totalPrice -= removedItem.quantity * removedItem.product.price;
        state.cartProducts.splice(itemIndex, 1);
      }
    },

    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartProducts.find(
        (item) => item.product.id === action.payload
      );

      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.product.price;
      }
    },

    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartProducts.find(
        (item) => item.product.id === action.payload
      );

      if (item) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.product.price;

        if (item.quantity <= 0) {
          state.cartProducts = state.cartProducts.filter(
            (i) => i.product.id !== action.payload
          );
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export default cartSlice;
