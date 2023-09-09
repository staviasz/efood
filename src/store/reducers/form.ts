import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AddressProps = {
  receiver: string;
  address: string;
  city: string;
  cep: string;
  number: string;
  complement?: string;
};

type FormState = {
  formAddress: AddressProps;
  isOpen: boolean;
};

const initialState: FormState = {
  formAddress: {
    receiver: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: '',
  },

  isOpen: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    openClose: (state) => {
      state.isOpen = !state.isOpen;
    },
    addFormAddress: (state, action: PayloadAction<AddressProps>) => {
      state.formAddress = action.payload;
    },
  },
});

export const { openClose, addFormAddress } = formSlice.actions;
export default formSlice.reducer;
