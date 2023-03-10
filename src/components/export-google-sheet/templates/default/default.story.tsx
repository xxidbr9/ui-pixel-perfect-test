import { ComponentStory, ComponentMeta } from '@storybook/react';
import DefaultComp from './default';

export default {
  title: "output/Export to Google",
  component: DefaultComp,

} as ComponentMeta<typeof DefaultComp>;

export const Default: ComponentStory<typeof DefaultComp> = () => <DefaultComp />