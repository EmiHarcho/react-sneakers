import { createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { CartItemType } from '../components/CartItem'

enum Status{
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}
interface Icard{
    items : CartItemType[]
    status : Status
}

export const fetchPizzas = createAsyncThunk('cards/fetchCardsStatus', async(params : Record<string, string>) => {
    const {searchValue} = params
    const {data} = await axios.get<CartItemType[]>(`https://634fe12978563c1d82b26a70.mockapi.io/items?search=${searchValue}`)
    return data as CartItemType[]
})

const initialState : Icard = {
    items : [],
    status : Status.LOADING
}

const cardSlice = createSlice({
    name : "card",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = Status.LOADING;
            state.items = []
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        })
    }
})
export default cardSlice.reducer