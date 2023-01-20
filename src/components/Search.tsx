import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/search.module.scss'
import { changeValue } from '../redux/search'
import debounce from 'lodash.debounce'

const Search = () => {
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = React.useState('')

  const updateValue = React.useCallback(
    debounce((str : string) => {
      dispatch(changeValue(str))
    }, 1000), 
  [])
    
  const changeSearchValue = (event : React.ChangeEvent <HTMLInputElement>) => {
    setSearchValue((event.target.value))
    updateValue(event.target.value)
  }
  return (
    <div className={styles.search}>
        <input 
            onChange={changeSearchValue} 
            value={searchValue} 
            type="text" 
            placeholder='Поиск...'
        />
    </div>
  )
}
export default Search