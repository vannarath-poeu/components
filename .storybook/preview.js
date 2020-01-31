import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import {BaseStyles, Link, Heading, Flex} from '../src'
import { withKnobs} from '@storybook/addon-knobs'

// import {Code, InlineCode, Table, Image, Paragraph, HorizontalRule, Blockquote, Heading, List, DescriptionList} from '@primer/gatsby-theme-doctocat'
const {H1, H2, H3, H4, H5, H6} = Heading
const components = {
  a: Link,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
}
addDecorator(storyFn => {
  return (
    <BaseStyles>
      <Flex justifyContent="center" p={4}>
        {storyFn()}
      </Flex>
    </BaseStyles>
  )
});

addDecorator(withKnobs)

addParameters({docs: {components}});