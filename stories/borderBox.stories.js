import React from 'react';
import {BorderBox} from '../src';

export default {
  title: 'BorderBox',
  component: BorderBox,
};

export const Default = () => {
  return (
    <BorderBox>This is a BorderBox</BorderBox>
  )
}

export const CustomBorderColor = () => {
  return (
    <BorderBox borderColor="red.4">This is a BorderBox</BorderBox>
  )
}