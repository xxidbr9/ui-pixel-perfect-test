import Card from "app/components/design-system/card"
import Header from "../../components/header"
import Button from "app/components/design-system/button"
import Typography from "app/components/design-system/typography"
import Illustration from "../../components/illustration"
import styles from './connect-account.module.css';

const ConnectAccountTemplate = () => {
  return (
    <Card>
      <Header />
      <div className={styles['error-block']}>
        <div className={styles['header']}>
          <Illustration />
          <div className={styles['text']}>
            <Typography.Text variant="13-b" className={styles['.text-connection-failed']}>
              Connect Google Account
            </Typography.Text>
            <Typography.Text variant="11" className={styles['text-please-try-again']}>
              Please connect Google Account to use this block
            </Typography.Text>
          </div>
        </div>
        <Button size="small">
          Connect
        </Button>
      </div>
    </Card>
  )
}

export default ConnectAccountTemplate