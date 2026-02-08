import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "../common/login";

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
    nextId: number,
    loginError: string | null,
    loading: boolean,
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
    nextId: 1,
    loginError: null,
    loading: false,
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

        logout: (state, _action) => {
            state.currentAccount = initialState.currentAccount;
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
    },
    extraReducers: builder => {
        builder
            .addCase(loginUser.pending, state => {
                state.loading = true
                state.loginError = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.loginError = null
                state.currentAccount = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.loginError = action.payload as string
            })
    }
});

export default Users.reducer;
export const { createUser, updateBalance, logout, setWins, setDefeats } = Users.actions;