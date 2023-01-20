import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {CartItemType} from '../components/CartItem'
import {getPurchasesLS} from '../utils/getItemsLS'

interface Ipurchases{
    purchasesItems : CartItemType[]
}

const initialState : Ipurchases = getPurchasesLS()

const purchasesSlice = createSlice({
    name : 'purchases',
    initialState,
    reducers : {
        addPurchasesItem(state, action : PayloadAction<CartItemType[]>){
            state.purchasesItems = [...state.purchasesItems, ...action.payload] 
        },
        clearPurchasesItems(state){
            state.purchasesItems = []
        }
     } 
})
export const {addPurchasesItem, clearPurchasesItems} = purchasesSlice.actions
export default purchasesSlice.reducer