import React from 'react'
import CartItem from '../components/CartItem'
import btn_arrow from '../assets/btn_arrow.png'
import { useSelector } from 'react-redux'
import Empty from '../components/Empty.tsx'
import styles from '../styles/otherPages.module.scss'
import { Link } from 'react-router-dom'
import smiley from '../assets/smiley.png'
import { RootState } from '../redux/store'

const Bookmarks = () => {
    
    const {bookmarksItems} = useSelector((state : RootState) => state.bookmarksSlice)

    return(
        <div className={styles.container}>
            {
            bookmarksItems.length       
                ? <>
                    <div className={styles.header_cont}>
                        <button className={styles.btn_img}>
                            <Link to='/'>
                                <img src={btn_arrow} alt="bookmarks"/>
                            </Link>
                        </button>
                        <h1>Мои закладки</h1>
                    </div>    
                    <div className="card_items">
                        {bookmarksItems.map((item : any) => <CartItem {...item} key={item.id}/>)}
                    </div>
                 </>
                : <Empty 
                    imgUrl={smiley}
                    title={"Закладок нет :("}
                    info={"Вы ничего не добавляли в закладки"}
                  />
            }
        </div>
    )
} 
export default Bookmarks