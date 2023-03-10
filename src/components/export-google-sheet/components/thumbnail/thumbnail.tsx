import styles from './thumbnail.module.css';
import { GoogleSpreadSheetsIcon } from 'app/assets/svg/icons';


const Thumbnail = () => {
  return (
    <div className={styles['thumbnail']}>
      <GoogleSpreadSheetsIcon />
    </div>
  )
}

export default Thumbnail