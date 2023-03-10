import styles from './illustration.module.css';
import { GoogleIcon } from 'app/assets/svg/icons';


const Illustration = () => {
  return (
    <div className={styles['illustration']}>
      <GoogleIcon />
    </div>
  )
}

export default Illustration