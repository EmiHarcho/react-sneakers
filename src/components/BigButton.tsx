import React from 'react'
import styles from '../styles/bigButton.module.scss'
import { Link } from 'react-router-dom'

type bigButton = {
    children : string,
    setState? : (a : boolean) => void
}
const BigButton : React.FC<bigButton> = ({children, setState}) => {
    return(
        <button onClick={() => setState && setState(false)} className={styles.bigButton}>
            <Link to='/'>{children}</Link>
        </button>
    )
}
export default BigButton