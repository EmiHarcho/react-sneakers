import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {CartItemType} from '../components/CartItem'
import {getMarksLS} from '../utils/getItemsLS'

interface Ibookmarks{
    bookmarksItems : CartItemType[]
}
const setLS = (items : CartItemType[]) => {
    const json = JSON.stringify(items)
    localStorage.setItem("marks", json)
}
const initialState : Ibookmarks = getMarksLS()

const bookmarksSlice = createSlice({
    name : "bookmarks",
    initialState,
    reducers : {
        addItemBookmark(state, action : PayloadAction<CartItemType>){
            const findItem = state.bookmarksItems.find((obj) => obj.id === action.payload.id)
            if(!findItem){
                state.bookmarksItems = [...state.bookmarksItems, action.payload]
            }
            setLS(state.bookmarksItems)
        },
        removeItemBookmark(state, action : PayloadAction<string>){
            state.bookmarksItems =  state.bookmarksItems.filter(obj => obj.id !== action.payload)
            setLS(state.bookmarksItems)
        }
    }
})
export const {addItemBookmark, removeItemBookmark} = bookmarksSlice.actions
export default bookmarksSlice.reducer