import React, { useRef } from 'react'
import logo from '../assets/header/logo.png'
import basket_logo from '../assets/header/basket_logo.png'
import mark_logo from '../assets/header/mark_logo.png'
import purchases_logo from '../assets/header/purchases_logo.png'
import style from '../styles/header.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

interface headerProps {
  setIsBacket : (a : boolean) => void
}
type PopupClick =  MouseEvent & {
  path : Node[]
}


const Header : React.FC<headerProps> = ({setIsBacket}) => {

    const burger = useRef<HTMLDivElement>(null)

    const {totalPrice} = useSelector((state : RootState) => state.basketSlice)
    const [burgerActive, setBurgerActive] = React.useState(false)

    const openBurger = () => {
      setBurgerActive(!burgerActive)
      if(burger.current) burger.current.classList.toggle(style.active)
    }

    React.useEffect(() => {
      const clickOutside = (event : MouseEvent) => {
        const _event = event as PopupClick
        if(burger.current && !_event.path.includes(burger.current)){
          burgerActive && openBurger()
        }
      }
      document.body.addEventListener('click', clickOutside)
      return () => document.body.removeEventListener('click', clickOutside)
    }, [burgerActive])

    return (
      <header>
      <div className={style.header_left}>
        <Link to='/'>
          <img src={logo} alt='logo'/>
        </Link>
        <div className={style.header_info}>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      {/* BURGER */}
      <div className={style.burger} onClick={openBurger} ref={burger}>
        <span></span>
      </div>
      {/* FOLDER_LIST */}
      {burgerActive && 
        <div className={style.folded_list}>
          <div className={style.folded_list_item} onClick={() => setIsBacket(true)} >
            <Link to=''>
              <img src={basket_logo} alt="basket" />
            </Link>
          </div>
          <div className={style.folded_list_item}>
            <Link to='/bookmarks'>
              <img src={mark_logo} alt="bookmarks" />
            </Link>
          </div>
          <div className={style.folded_list_item}>
            <Link to='/purchases'>
              <img src={purchases_logo} alt="mark" />
            </Link>
          </div>
        </div>
      }
      <ul className={style.header_right}>
        <li onClick={() => setIsBacket(true)}>
          <img src={basket_logo} alt='basket_logo'/>
          <span>{totalPrice}p.</span>
        </li>
        <li>
          <Link to='/bookmarks'>
            <img src={mark_logo} alt='header_like'/>
          </Link>
        </li>
        <li>
          <Link to='/purchases'>
            <img src={purchases_logo} alt='purchases'/>
          </Link>
        </li>
      </ul>
    </header>
    );
}
export default Header