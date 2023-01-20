import React from 'react'
import slider_logo from '../assets/slider/slider_logo.png'
import next_slider from '../assets/slider/next_slider.png'
import styles from '../styles/slider.module.scss'


const Slider : React.FC = () => {
  return (
    <div className={styles.slider}>
        <div className={styles.slider_left}>
            <img src={slider_logo} alt="logo" />
            <div className={styles.content_slider}>
                <h1>Stan Smith,<br/>Forever!</h1>
                <button>КУПИТЬ</button>
            </div>
        </div>
        <div className={styles.slider_rigth}>
          <span>
            <img src={next_slider}/>
          </span>
        </div>
    </div>
  )
}

export default Slider