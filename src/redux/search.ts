import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Isearch{
    searchValue : string
}

const initialState : Isearch = {
    searchValue : '',
}
const search = createSlice({
    name : 'search',
    initialState,
    reducers: {
        changeValue(state , action : PayloadAction<string>){
            state.searchValue = action.payload
        }
    }
})
export const {changeValue} = search.actions
export default search.reducer