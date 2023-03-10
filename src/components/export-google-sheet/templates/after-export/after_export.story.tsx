import { ComponentStory, ComponentMeta } from '@storybook/react';
import AfterExportTemplate from './after_export';

export default {
  title: "output/Export to Google",
  component: AfterExportTemplate,
} as ComponentMeta<typeof AfterExportTemplate>;

export const AfterExport: ComponentStory<typeof AfterExportTemplate> = () => <AfterExportTemplate />