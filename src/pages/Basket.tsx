import React from "react"
import BasketCard from "../components/BasketCard"
import { useDispatch, useSelector } from "react-redux"
import styles from '../styles/basket.module.scss'
import desingImg from '../assets/basket/desingImg.jpg' 
import BigButton from "../components/BigButton"
import { clearBasket } from "../redux/basketSlice"
import basketEmpty from '../assets/basket/basketEmpty.png'
import { addPurchasesItem } from "../redux/purchasesSlice."
import { RootState } from "../redux/store"

type eventType = MouseEvent & {
    path : Node[]
}
interface basketProps{
    setIsBacket : (a : boolean) => void
}

const Basket : React.FC<basketProps> = ({setIsBacket}) => {

    const dispatch = useDispatch()
    const {basketItems, totalPrice, percent} = useSelector((state : RootState) => state.basketSlice)

    const [hideBasket, setHideBasket] = React.useState(false)
    const [desing, setDesing] = React.useState(false)

    const basketRigth = React.useRef<HTMLDivElement>(null)

    React.useEffect (() => {
        const clickOutside = (event : MouseEvent) => {
            const _event = event as eventType
            if(basketRigth.current && !_event.path.includes(basketRigth.current)){
                setIsBacket(false)
                setHideBasket(false)
            }
        }
        hideBasket && document.body.addEventListener('click', clickOutside)
        return () => document.body.removeEventListener('click', clickOutside)

    },[hideBasket])

    const openDesing = () => {
        dispatch(addPurchasesItem(basketItems))
        dispatch(clearBasket())
        setDesing(true)
        const json = JSON.stringify(basketItems)
        localStorage.setItem("purchases", json)
    }

    // ITEMS
    const itemsBasket = () => {
        return (<>
            <div className={styles.basket_items}>
                { basketCards }
            </div>
            <div className={styles.basket_total}>
                <div className={styles.total_price}>
                    <p>Итого:</p>
                    <span></span>
                    <div className={styles.price}>{totalPrice} руб.</div>
                </div>
                <div className={styles.total_price}>
                    <p>Налог 5%:</p>
                    <span></span>
                    <div className={styles.price}>{percent} руб.</div>
                </div>
                <button className={styles.bigButton} onClick={openDesing}>Оформить заказ</button>
            </div>
        </>)
    }
    //DESING
    const Desing = () => {
        return(
            <div className={styles.emptyBasket}>
                <img src={desingImg} alt="desingImg" />
                <h1>Заказ оформлен!</h1>
                <p>Ваш заказ #18 скоро будет передан курьерской доставке</p>
                <BigButton setState={setIsBacket}>Вернуться назад</BigButton>
            </div>
        )
    }
    //EMPTY
    const Empty = () => {
        return(
            <div className={styles.emptyBasket}>
                <img src={basketEmpty} alt="..." />
                <h1>"Корзина пустая"</h1>
                <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                <BigButton setState={setIsBacket}>Вернуться назад</BigButton>
            </div>
        )
    }

    const basketCards = basketItems.map((item, index) => <BasketCard {...item} key={index}/>)
    return(
        <div onClick={() => setHideBasket(true)} className={styles.basket}>
            <div ref={basketRigth} className={styles.basket_rigth}>
                <h1>Корзина</h1>
                {
                !desing 
                    ? basketItems.length 
                        ? itemsBasket()
                        : Empty()
                    : Desing()
                } 
            </div>
        </div>
    )
}
export default Basket