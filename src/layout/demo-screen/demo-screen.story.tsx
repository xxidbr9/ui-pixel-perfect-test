import { ComponentStory, ComponentMeta } from '@storybook/react';
import DemoScreen from './demo-screen';

export default {
  title: "",
  component: DemoScreen,
} as ComponentMeta<typeof DemoScreen>;

export const Demo: ComponentStory<typeof DemoScreen> = () => <DemoScreen />