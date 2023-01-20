import { CartItemType } from '../components/CartItem'
import { getTotalPrice, getPercent } from './counting'
//BASKET
export const getBasketLS = () => {
    const data = localStorage.getItem('basket')
    const basketItems = data ? JSON.parse(data) as CartItemType[] : []
    const totalPrice = getTotalPrice(basketItems)
    const percent = getPercent(basketItems)
    return {
        basketItems,
        totalPrice,
        percent
    }
}

// MARKS
export const getMarksLS = () => {
    const data = localStorage.getItem('marks')
    const bookmarksItems = data ? JSON.parse(data) as CartItemType[] : []
    return {bookmarksItems}
}

//PURCHASES
export const getPurchasesLS = () => {
    const data = localStorage.getItem('purchases')
    const purchasesItems = data ? JSON.parse(data) as CartItemType[] : []
    return {purchasesItems}
}


