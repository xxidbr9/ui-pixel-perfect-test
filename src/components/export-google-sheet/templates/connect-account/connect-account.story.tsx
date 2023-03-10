import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConnectAccountTemplate from './connect-account';

export default {
  title: "output/Export to Google",
  component: ConnectAccountTemplate,
} as ComponentMeta<typeof ConnectAccountTemplate>;

export const ConnectAccount: ComponentStory<typeof ConnectAccountTemplate> = () => <ConnectAccountTemplate />