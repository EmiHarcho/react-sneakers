import { configureStore } from '@reduxjs/toolkit/'
import cardSlice from './cardSlice'
import basketSlice from './basketSlice'
import { useDispatch } from "react-redux"
import search from './search'
import bookmarksSlice from './bookmarksSlice'
import purchasesSlice from './purchasesSlice.'

export const store = configureStore({
    reducer: {
        cardSlice,
        basketSlice,
        search,
        bookmarksSlice,
        purchasesSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
