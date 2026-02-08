import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";

export const loginUser = createAsyncThunk(
    'users/login',
    async(
        data: {name: string; password: string;},
        {getState, rejectWithValue}
    ) => {
        const state = getState() as RootState;
        const users = state.users.AllAccounts;

        const user = users.find(
            u => u.name === data.name
        )

        if (!user){
            return rejectWithValue('User does not exist!')
        }

        if(user.password == data.password){
            return user;
        } else {
            return rejectWithValue('Incorrect password.')
        }
    }
)