import ContentLoader from 'react-content-loader'
import styles from '../styles/loader.module.scss'


const Loading : React.FC = () => {

    return(
        <div className={styles.loading}>
            <ContentLoader 
                speed={2}
                width={150}
                height={200}
                viewBox="0 0 150 200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="330" y="159" rx="0" ry="0" width="110" height="30" /> 
                <rect x="0" y="-1" rx="10" ry="10" width="150" height="90" /> 
                <rect x="0" y="115" rx="3" ry="3" width="150" height="15" /> 
                <rect x="0" y="175" rx="8" ry="8" width="80" height="25" /> 
                <rect x="0" y="136" rx="3" ry="3" width="90" height="15" /> 
                <rect x="120" y="170" rx="8" ry="8" width="30" height="30" />
        </ContentLoader>
    </div>
    )

}
export default Loading