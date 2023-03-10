import styles from './demo-screen.module.css';
import clsx from 'clsx';
import DefaultTemplate from '@/components/export-google-sheet/templates/default';
import Typography from '@/components/design-system/typography/typography';
import ConnectAccountTemplate from '@/components/export-google-sheet/templates/connect-account';
import SelectingTabTemplate from '@/components/export-google-sheet/templates/selecting-tab/selecting-tab';
import ExportTemplate from '@/components/export-google-sheet/templates/export/export';
import { AfterExport } from '@/components/export-google-sheet/templates/after-export/after_export.story';


const DemoScreen = () => {
  return (
    <div className={clsx([styles['main-app'], "gap-y-4"])}>
      <Typography.Heading>
        Output/Export to Google Sheets
      </Typography.Heading>
      <div>
        <a href='https://ui-pixel-perfect-test.vercel.app/' target='_blank'>
          <Typography.Text>
            See Storybook
          </Typography.Text>
        </a>
      </div>
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
