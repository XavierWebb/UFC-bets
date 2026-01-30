import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type User = {
    id: number,
    name: string,
    password: string,
    email: string,
    balance: number,
    wins: number,
    defeats: number,
    earned: number,
    registredAt: Date | 'not_yet',
};

type UserType = {
    name: string,
    password: string,
    email: string,
    balance: number,
    wins: number,
    defeats: number,
    earned: number,
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
        wins: 0,
        defeats: 0,
        earned: 0,
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
        loginUser: (state, action: PayloadAction<{ name: string, password: string }>) => {
            const user = state.AllAccounts.find(
                acc => acc.name == action.payload.name && acc.password == action.payload.password

            );

            if (user) {
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
        },

        setWins: (state) => {
            const user = state.AllAccounts.find(
                acc => acc.name == state.currentAccount.name
            );
            state.currentAccount.wins += 1

            if (user) {
                user.wins += 1
            }
        },

        setDefeats: (state) => {
            const user = state.AllAccounts.find(
                acc => acc.name == state.currentAccount.name
            );

            state.currentAccount.defeats += 1


            if (user) {
                user.defeats += 1
            }
        }
    }
});

export default Users.reducer;
export const { createUser, loginUser, updateBalance, setWins, setDefeats } = Users.actions;