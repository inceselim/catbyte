import { createAsyncThunk, applyMiddleware, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";

interface UserState {
    data: User | null;
    loading: boolean;
    error: string;
}

const initialState: UserState = {
    data: null,
    loading: false,
    error: ""
}

export const fetchUser = createAsyncThunk("fetchUser", async () => {
    const response = await axios.get<User>("https://dummyjson.com/users/")
    return response.data;
})

const dataSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = "Fetch Error !"
        })
    }
})

export default dataSlice.reducer;



export interface Hair {
    color: string;
    type: string;
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface Address {
    address: string;
    city: string;
    coordinates: Coordinates;
    postalCode: string;
    state: string;
}

export interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

export interface Coordinates2 {
    lat: number;
    lng: number;
}

export interface Address2 {
    address: string;
    city: string;
    coordinates: Coordinates2;
    postalCode: string;
    state: string;
}

export interface Company {
    address: Address2;
    department: string;
    name: string;
    title: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    domain: string;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
}

export interface User {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}

