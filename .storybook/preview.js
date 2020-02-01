import React from 'react'
import {addDecorator} from '@storybook/react'
import {BaseStyles, Box} from '../src'
import {withKnobs} from '@storybook/addon-knobs'

addDecorator(storyFn => {
  return (
    <BaseStyles>
      <Box p={4}>
        {storyFn()}
      </Box>
    </BaseStyles>
  )
});

addDecorator(withKnobs)