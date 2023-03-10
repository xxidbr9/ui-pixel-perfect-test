import styles from './demo-screen.module.css';
import clsx from 'clsx';
import DefaultTemplate from 'app/components/export-google-sheet/templates/default';
import Typography from 'app/components/design-system/typography/typography';
import ConnectAccountTemplate from 'app/components/export-google-sheet/templates/connect-account';
import SelectingTabTemplate from 'app/components/export-google-sheet/templates/selecting-tab/selecting-tab';
import ExportTemplate from 'app/components/export-google-sheet/templates/export/export';
import { AfterExport } from 'app/components/export-google-sheet/templates/after-export/after_export.story';


const DemoScreen = () => {
  return (
    <div className={clsx([styles['main-app'], "gap-y-4"])}>
      <Typography.Heading>
        Output/Export to Google Sheets
      </Typography.Heading>
      <ConnectAccountTemplate />
      <DefaultTemplate />
      <SelectingTabTemplate />
      <div className={styles['space']} />
      <ExportTemplate />
      <AfterExport />

    </div>
  )
}

export default DemoScreen
