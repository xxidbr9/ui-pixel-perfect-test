import { TrashBinDeleteIcon } from 'app/assets/svg/icons'
import Button from 'app/components/design-system/button'
import Typography from 'app/components/design-system/typography'
import Thumbnail from '../thumbnail'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <span className='flex items-center gap-x-3'>
        <Thumbnail />
        <Typography.Text variant='13-b'>
          Export to Google Sheets
        </Typography.Text>
      </span>
      <Button isIcon size='small' variant='secondary' prefixIcon={TrashBinDeleteIcon} />
    </div>
  )
}

export default Header