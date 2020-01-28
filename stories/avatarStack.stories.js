import React from 'react';
import {AvatarStack} from '../src';

export default {
  title: 'AvatarStack',
  component: AvatarStack,
};

export const Default = () => {
  return (
    <AvatarStack>
      <img alt="Primer" src="https://avatars.githubusercontent.com/primer"/>
      <img alt="GitHub" src="https://avatars.githubusercontent.com/github"/>
      <img alt="Atom" src="https://avatars.githubusercontent.com/atom"/>
      <img alt="Desktop" src="https://avatars.githubusercontent.com/desktop"/>
    </AvatarStack>
  )
}


export const RightAligned = () => {
  return (
    <AvatarStack alignRight ml="100px">
      <img alt="Primer" src="https://avatars.githubusercontent.com/primer"/>
      <img alt="GitHub" src="https://avatars.githubusercontent.com/github"/>
      <img alt="Atom" src="https://avatars.githubusercontent.com/atom"/>
      <img alt="Desktop" src="https://avatars.githubusercontent.com/desktop"/>
    </AvatarStack>
  )
}