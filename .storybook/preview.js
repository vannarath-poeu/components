import React from 'react'
import { addDecorator } from '@storybook/react';
import {BaseStyles, BorderBox} from '../src';

addDecorator(storyFn => {
  return (
    <BaseStyles>
      {storyFn()}
    </BaseStyles>
  )
});