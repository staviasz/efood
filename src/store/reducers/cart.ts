import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Menu } from '../../mapData/mapRestaurants';

type PropsItem = Menu & {
  qty: number;
};

type CartState = {
  items: PropsItem[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      const plate = state.items.find((item) => item.id === action.payload.id);

      if (!plate) {
        state.items.push({ ...action.payload, qty: 1 });
      } else {
        plate.qty += 1;
      }
    },
    decraseQty: (state, action: PayloadAction<number>) => {
      const plate = state.items.find((item) => item.id === action.payload);
      if (plate!.qty > 1) {
        plate!.qty -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id === action.payload);

      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    openClose: (state) => {
      state.isOpen = !state.isOpen;
    },

    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, openClose, remove, clear, decraseQty } = cartSlice.actions;
export default cartSlice.reducer;
