import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectingTabTemplate from './selecting-tab';

export default {
  title: "output/Export to Google",
  component: SelectingTabTemplate,
} as ComponentMeta<typeof SelectingTabTemplate>;

export const SelectingTab: ComponentStory<typeof SelectingTabTemplate> = () => <SelectingTabTemplate />