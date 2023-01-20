import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {CartItemType} from '../components/CartItem'
import { getTotalPrice, getPercent} from "../utils/counting"
import {getBasketLS} from '../utils/getItemsLS'

interface Ibasket {
    basketItems : CartItemType[],
    totalPrice : number,
    percent : number,
}
const setLS = (items : CartItemType[]) => {
    const json = JSON.stringify(items)
    localStorage.setItem("basket", json)
}

const initialState : Ibasket = getBasketLS()

const basketSlice = createSlice({
    name : 'basket',
    initialState,
    reducers : {
        addItemsBasket(state, action : PayloadAction<CartItemType>){     
            const findItem = state.basketItems.find(obj => obj.id === action.payload.id)
            if(!findItem){
                state.basketItems = [...state.basketItems, action.payload]
                state.totalPrice = getTotalPrice(state.basketItems)
                state.percent = getPercent(state.basketItems)
                setLS(state.basketItems) 
            }      
        },
        removeItemBasket(state, action : PayloadAction<string>){
            state.basketItems = state.basketItems.filter((obj) => obj.id !== action.payload) 
            state.totalPrice = getTotalPrice(state.basketItems)
            state.percent = getPercent(state.basketItems)
            setLS(state.basketItems)   
        },
        clearBasket(state){
            state.basketItems = []
            state.totalPrice = 0
            state.percent = 0
            setLS(state.basketItems)   
        }
    } 
})
export const {addItemsBasket, removeItemBasket, clearBasket} = basketSlice.actions
export default basketSlice.reducer