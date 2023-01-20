import CartItem from '../components/CartItem'
import  btn_arrow from '../assets/btn_arrow.png'
import { useSelector } from 'react-redux'
import Empty from '../components/Empty'
import styles from '../styles/otherPages.module.scss'
import { Link } from 'react-router-dom'
import smiley from '../assets/smiley.png'
import { clearPurchasesItems } from '../redux/purchasesSlice.'
import { useDispatch } from 'react-redux'
import clearImg from '../assets/clearImg.png'
import { RootState } from '../redux/store'
import {CartItemType} from '../components/CartItem'

const Purchases = () => {
    const dispatch = useDispatch()

    const clearItems = () => {
        dispatch(clearPurchasesItems())
    }

    const {purchasesItems} = useSelector((state : RootState) => state.purchasesSlice)

    return(
        <div className={styles.container}>
            {
            purchasesItems.length       
                ? <>
                    <div className={styles.header_cont}>
                        <button className={styles.btn_img}>
                            <Link to='/'>
                                <img src={btn_arrow} alt="bookmarks"/>
                            </Link>
                        </button>
                        <h1>Мои покупки</h1>
                        <button className={styles.purchasesClear} onClick={clearItems}>
                            <img src={clearImg} alt="clear" />
                        </button>
                    </div>    
                    <div className="card_items">
                        {purchasesItems.map((item : CartItemType, index) => <CartItem {...item} key={index}/>)}
                    </div>
                  </> 
                : <Empty 
                    imgUrl={smiley}    
                    title={"У вас нет заказов"}    
                    info={"Вы нищеброд? Оформите хотя бы один заказ."}  
                />
            }
        </div>
    )
}
export default Purchases