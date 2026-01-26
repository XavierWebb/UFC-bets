import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface state {
    signUpModal: boolean,
    loginModal: boolean,
    walletModal: boolean
}

const initialState: state = {
    signUpModal: false,
    loginModal: false,
    walletModal: false,
}

const ModalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<keyof state>) => {
            state[action.payload] = true;
        },
        closeModal: (state, action: PayloadAction<keyof state>) => {
            console.log(state[action.payload], action.payload   )
            state[action.payload] = false;
        },
        
    }
});

export default ModalSlice.reducer;
export const { openModal, closeModal } = ModalSlice.actions;