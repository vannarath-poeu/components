import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import {BaseStyles, Link, Heading, Flex} from '../src'
import { withKnobs} from '@storybook/addon-knobs'


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