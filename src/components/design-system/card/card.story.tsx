import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '.';
import Typography from '../typography/typography';

export default {
  title: "components/card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (props) => <Card {...props} />;

Default.args = {
  children: "Hello world"
}
export const UsingText: ComponentStory<typeof Card> = (props) => (
  <Card>
    <Typography.Text variant='13-b'>
      {props.children}
    </Typography.Text>
  </Card>
);

UsingText.args = {
  children: "Export to Google Sheets"
}

export const MultipleLine: ComponentStory<typeof Card> = (props) => (
  <Card>
    <Typography.Text variant='13-b'>
      {props.children}
    </Typography.Text>
    <Typography.Text variant='13-b'>
      {props.children}
    </Typography.Text>
    <Typography.Text variant='13-b'>
      {props.children}
    </Typography.Text>
  </Card>
);

MultipleLine.args = {
  children: "Export to Google Sheets"
}