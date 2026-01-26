import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type User = {
    id: number,
    name: string,
    password: string,
    email: string,
    balance: number,
    registredAt: Date | 'not_yet',
};

type UserType = {
    name: string,
    password: string,
    email: string,
    balance: number,
    registredAt: Date | 'not_yet',
};

interface initialStateInter {
    currentAccount: User,
    AllAccounts: User[],
    nextId: number
}

const initialState: initialStateInter = {
    currentAccount: {
        id: 0,
        name: '',
        password: '',
        email: '',
        balance: 0,
        registredAt: 'not_yet'
    },
    AllAccounts: [],
    nextId: 1
};

const Users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        createUser: (state, action: PayloadAction<UserType>) => {
            const newUser = {
                ...action.payload,
                id: state.nextId
            }
            state.AllAccounts.push(newUser);
            state.currentAccount = newUser;
            state.nextId += 1
        },
        loginUser: (state, action: PayloadAction<{name: string, password: string}>) => {
            const user = state.AllAccounts.find(
                acc => acc.name == action.payload.name && acc.password == action.payload.password

            );

            if (user){
                state.currentAccount = user;
            }
        },

        updateBalance: (state, action: PayloadAction<number>) => {
            const user = state.AllAccounts.find(
                acc => acc.name == state.currentAccount.name
            );

            state.currentAccount.balance += action.payload;

            if (user) {
                user.balance += action.payload;
            };
        }
    }
});

export default Users.reducer;
export const { createUser, loginUser, updateBalance} = Users.actions;