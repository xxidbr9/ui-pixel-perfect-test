import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExportTemplate from './export';

export default {
  title: "output/Export to Google",
  component: ExportTemplate,
} as ComponentMeta<typeof ExportTemplate>;

export const Export: ComponentStory<typeof ExportTemplate> = () => <ExportTemplate />