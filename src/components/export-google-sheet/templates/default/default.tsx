import { DatabaseIcon } from '@/assets/svg/icons'
import Button from '@/components/design-system/button'
import Card from '@/components/design-system/card'
import Header from '../../components/header'

const DefaultTemplate = () => {
  return (
    <Card>
      <Header />
      <div className='w-full'>
        <Button variant='secondary' prefixIcon={DatabaseIcon} bold={false} rounded full>
          Connect Flow Node to Import to Google Sheets
        </Button>
      </div>
    </Card>
  )
}

export default DefaultTemplate