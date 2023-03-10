import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './button';
import { TrashBinDeleteIcon } from 'app/assets/svg/icons';

export default {
  title: "components/button",
  component: Button,
  argTypes: {
    full: {
      options: [false, true],
      defaultValue: false,
      control: { type: 'select' },
      description: "Change width size"
    },
    disabled: {
      options: [false, true],
      defaultValue: false,
      control: { type: 'select' },
    },
    size: {
      options: ["small", "medium", "big"],
      defaultValue: "medium",
      control: { type: 'select' },
    },
    variant: {
      options: ["primary", "secondary"],
      defaultValue: "primary",
      control: { type: 'select' },
    }
  }
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (props) => <Button {...props} />;

Default.args = {
  children: "Hello world"
}

export const WithIcon: ComponentStory<typeof Button> = (props) => <Button {...props} />;

WithIcon.args = {
  prefixIcon: TrashBinDeleteIcon,
  children: "Hello world",
  size: "big"
}


export const Icon: ComponentStory<typeof Button> = (props) => <Button {...props} />;
Icon.args = {
  isIcon: true,
  prefixIcon: TrashBinDeleteIcon,
  variant:"secondary",
}