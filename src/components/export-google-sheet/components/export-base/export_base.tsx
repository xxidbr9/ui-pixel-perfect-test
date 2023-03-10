
import { ArrowDownSmallChevronIcon, GoogleSpreadSheetsIcon } from 'app/assets/svg/icons'
import Card from 'app/components/design-system/card'
import Input from 'app/components/design-system/input'
import styles from './export_base.module.css';
import Typography from 'app/components/design-system/typography';
import Header from '../header';
import Button from 'app/components/design-system/button';
import Select from 'app/components/design-system/select';
import Tag from 'app/components/design-system/tag/tag';
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