import React from 'react'
import Header from './components/Header'
import Content from './pages/Content'
import Basket from './pages/Basket'
import Bookmarks from './pages/bookmarks'
import { Route, Routes } from 'react-router-dom'
import Purchases from './pages/Purchases'


function App() { 

  const [isBasket, setIsBacket] = React.useState(false)

  return(
    <div className='wrapper'> 
      <Header setIsBacket={setIsBacket}/>
      <Routes>
          <Route path='/' element={<Content/>}/>
          <Route path='/bookmarks' element={<Bookmarks/>}/>
          <Route path='/purchases' element={<Purchases/>}/>
      </Routes>
      {isBasket && <Basket setIsBacket={setIsBacket}/>} 
    </div>
  )
}

export default App;
