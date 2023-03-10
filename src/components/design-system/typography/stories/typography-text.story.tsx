import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from '../typography';

const { Text } = Typography;

export default {
  title: "components/typography/text",
  component: Text,
  argTypes: {
    variant: {
      options: ["16-sb", "16", "16-text", "13-b", "13", "11-sb", "11", "11-text", "10-sb", "10"],
      description: "this is for change the size and tag name",
      defaultValue: "11",
      control: { type: 'select' },
    },
    as: {
      options: ["span", "div", "p"],
      control: { type: 'select' },
      defaultValue: "p"
    }
  }
} as ComponentMeta<typeof Text>;

export const Default: ComponentStory<typeof Text> = (props) => <Text {...props} />

Default.args = {
  children: "Hello world",
}