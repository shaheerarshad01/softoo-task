import {createSlice} from '@reduxjs/toolkit';

export interface IState {
  product: object;
  categoryId: number;
}

const initialState: IState = {
  product: {},
  categoryId: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state: IState, action) => {
      state.product = action.payload;
    },
  },
});

export const {setProduct} = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
