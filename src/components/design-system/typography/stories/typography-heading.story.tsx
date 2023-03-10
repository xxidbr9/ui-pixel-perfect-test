import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from '../typography';

const { Heading } = Typography;

export default {
  title: "components/typography/heading",
  component: Heading,
  argTypes: {
    variant: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "this is for change the size and tag name",
      defaultValue: "h3",
      control: { type: 'select' },
    }
  }
} as ComponentMeta<typeof Heading>;

export const Default: ComponentStory<typeof Heading> = (props) => <Heading {...props} />

Default.args = {
  children: "Hello world",
}