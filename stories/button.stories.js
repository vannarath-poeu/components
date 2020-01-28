import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonPrimary, ButtonDanger, ButtonGroup, ButtonOutline } from '../src';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Primary = () => (
  <ButtonPrimary>Hello</ButtonPrimary>
);

export const Danger = () => (
  <ButtonDanger>Hello</ButtonDanger>
);


export const Outline = () => (
  <ButtonOutline>Hello</ButtonOutline>
);
