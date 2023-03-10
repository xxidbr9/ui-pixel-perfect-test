
import { ArrowDownSmallChevronIcon, GoogleSpreadSheetsIcon } from '@/assets/svg/icons'
import Card from '@/components/design-system/card'
import Input from '@/components/design-system/input'
import styles from './export_base.module.css';
import Typography from '@/components/design-system/typography';
import Header from '../header';
import Button from '@/components/design-system/button';
import Select from '@/components/design-system/select';
import Tag from '@/components/design-system/tag/tag';
import { ExportBaseProps } from './export_base-props';
import clsx from 'clsx';


const SuffixCompAccountName = () => {
  return (
    <ArrowDownSmallChevronIcon />
  )
};

const PrefixSheetComponent = () => {
  return (
    <GoogleSpreadSheetsIcon className={styles['select-sheet-icon']} />
  )
}

const SuffixSHeetComponent = () => {
  return (
    <Tag suffixIcon={ArrowDownSmallChevronIcon}>
      Tab 1
    </Tag>
  )
}

const ExportBase = ({ isDropdownOpen, isButtonDisabled, isExported }: ExportBaseProps) => {
  return (
    <Card>
      <Header />
      <div className={styles['form-file-name']}>
        <Typography.Text variant='11-sb'>
          Google Account
        </Typography.Text>
        <Input suffixComponent={SuffixCompAccountName}>
          Account Name
        </Input>
      </div>
      <div className={styles['form-file-name']}>
        <Typography.Text variant='11-sb'>
          File
        </Typography.Text>
        <Select
          prefixComponent={PrefixSheetComponent}
          suffixComponent={SuffixSHeetComponent}
          open={isDropdownOpen}
        >
          sheetname
        </Select>
      </div>
      <div className={styles['bottom-form']}>
        <Button full disabled={isButtonDisabled}>
          Export
        </Button>
        {isExported && (
          <Typography.Text variant='10' className={clsx([styles['text']])}>
            Last export 14h ago
          </Typography.Text>
        )}
      </div>
    </Card>
  )
}

export default ExportBase