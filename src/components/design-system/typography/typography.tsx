import React, { Fragment } from 'react'
import Heading from './components/typography-heading'
import Text from './components/typography-text'



interface TypographyComponent extends React.FC {
  Heading: typeof Heading
  Text: typeof Text
}

const Typography: TypographyComponent = () => {
  return <Fragment />
}

// exporting components
Typography.Heading = Heading;
Typography.Text = Text;
export default Typography