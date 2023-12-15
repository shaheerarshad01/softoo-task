import { createSlice } from '@reduxjs/toolkit';

interface BasketItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

const basketSlice = createSlice({
  name: 'basket',
  initialState: [] as BasketItem[],
  reducers: {
    addToBasket: (state, action) => {
      const { id, name, price } = action.payload;
      const existingItem = state.find((item) => item.productId === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({
          productId: id,
          productName: name,
          price,
          quantity: 1,
        });
      }
    },
    removeFromBasket: (state, action) => {
      const productId = action.payload;
      return state.filter((item) => item.productId !== productId);
    },
    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      const item = state.find((item) => item.productId === productId);

      if (item) {
        item.quantity = newQuantity;
      }
    },
  },
});

export const { addToBasket, removeFromBasket, updateQuantity } = basketSlice.actions;
export default basketSlice.reducer;
