import styles from '../styles/Empty.module.scss'
import BigButton from './BigButton'

type EmptyProps = {
    imgUrl : string,
    title : string,
    info : string,
    setIsBasket? : (a : boolean) => boolean
}
const Empty : React.FC<EmptyProps> = ({imgUrl, title, info, setIsBasket}) => {
    return(
        <div className={styles.empty}>
            <img src={imgUrl} alt="..." />
            <h1>{title}</h1>
            <p>{info}</p>
            <BigButton setState={setIsBasket}>Вернуться назад</BigButton>
        </div>
    )
}
export default Empty