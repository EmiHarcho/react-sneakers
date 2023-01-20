import React from 'react'
import delete_backet_item from '../assets/basket/delete_backet_item.png'
import styles from '../styles/basketCard.module.scss'
import {removeItemBasket} from '../redux/basketSlice'
import { useDispatch } from 'react-redux'
import {CartItemType} from '../components/CartItem'

const BasketCard : React.FC<CartItemType> = ({title, price, imgUrl, id}) => {

  const dispatch = useDispatch()

  const removeCard = () => {
    dispatch(removeItemBasket(id))
  }
  return (
    <div className={styles.basket_item}>
        <img src={require('../assets' + imgUrl)}/>
        <div>
            <p>{title}</p>
            <span>{price} руб.</span>
        </div>
        <span>
          <img onClick={removeCard}src={delete_backet_item}/>
        </span>
    </div>
  )
}

export default BasketCard