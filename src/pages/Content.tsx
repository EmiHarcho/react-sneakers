import React from 'react'
import CartItem from '../components/CartItem'
import Search from '../components/Search'
import Slider from '../components/Slider'
import Loading from '../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas } from '../redux/cardSlice'
import { RootState } from '../redux/store'
import { AppDispatch } from '../redux/store'

const Content = () => {

  const dispatch = useDispatch<AppDispatch>()

  const {items, status} = useSelector((state : RootState) => state.cardSlice)
  const {searchValue} = useSelector((state : RootState) => state.search)

  const getCardItems = async() => {
    dispatch(fetchPizzas({searchValue}))
  }

  React.useEffect(() => {
    getCardItems()
  }, [searchValue])

  const cards = items.map((item : any) => <CartItem {...item} key={item.id}/>)
  const skeleton = [...new Array(8)].map((_, index) => <Loading key={index} />)

  return (
    <div className='content'>
      <Slider/>
        <div className="header_content">
          <h1>Все кроссовки</h1>
          <Search/>
        </div>
        <div className='card_items'>
          { status === "LOADING" ? skeleton : cards }   
        </div>
    </div>
  )
}

export default Content