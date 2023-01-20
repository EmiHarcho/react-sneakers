import { CartItemType } from "../components/CartItem"

export const getTotalPrice = (items : CartItemType[]) => items.reduce((sum, obj) => sum + obj.price, 0)

export const getPercent = (items : CartItemType[]) => {
    const price = getTotalPrice(items)
    const percent = Math.floor(price / 100 * 5)
    return percent
}

