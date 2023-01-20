import React from 'react'
import add_card from '../assets/cardItem/add_card.png'
import add_active_card from '../assets/cardItem/add_active_card.png'
import mark_btn from '../assets/cardItem/mark_btn.png'
import mark_active_btn from '../assets/cardItem/mark_active_btn.png'
import styles from '../styles/cardItem.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {addItemsBasket, removeItemBasket} from '../redux/basketSlice'
import { addItemBookmark } from '../redux/bookmarksSlice'
import {removeItemBookmark} from '../redux/bookmarksSlice'
import {RootState} from '../redux/store'

export type CartItemType = {
  title : string,
  price : number,
  imgUrl : string,
  id : string
}

const CartItem : React.FC<CartItemType> = ({title, price, imgUrl, id}) => {
  const dispatch = useDispatch()
  
  const activeBasketItem = useSelector((state : RootState) => state.basketSlice.basketItems.find((obj : CartItemType) => obj.id === id))
  const findItemMarks = useSelector((state : RootState) => state.bookmarksSlice.bookmarksItems.find((obj : CartItemType) => obj.id === id))

  const item = {title, price, imgUrl, id}
  
  const onAddBasket = () => {
    !activeBasketItem 
      ? dispatch(addItemsBasket(item))
      : dispatch(removeItemBasket(id))
  }

  const onAddBookMark = () => {
    !findItemMarks
      ? dispatch(addItemBookmark(item))
      : dispatch(removeItemBookmark(id))
  }
    return(
        <div className={styles.card_item}>
            <button onClick={onAddBookMark} className='btn_img'>
              <img src={findItemMarks ? mark_active_btn : mark_btn}/>
            </button>
            <img src={require('../assets' + imgUrl)}/>
            <p>{title}</p>
            <div>
              <p>ЦЕНА:</p>
              <b>{price} руб.</b>      
              <button onClick={onAddBasket} className='btn_img'>
                <img src={activeBasketItem ? add_active_card : add_card} alt="add" />
              </button>
            </div>
        </div>
    )
}
export default CartItem
