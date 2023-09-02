import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Data from '../../models/Data';

type CartState = {
  itens: Omit<Data, 'infos' | 'note'>[];
  qtd: number;
};

const initialState: CartState = {
  itens: [],
  qtd: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addToCart: (state, action: PayloadAction) => {
      state.qtd++;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
