import React from 'react'
import {AvatarPair, Avatar} from '../src'

export default {
  title: 'AvatarPair',
  component: AvatarPair,
};

export const Default = () => {
  return (
    <AvatarPair my={4}>
      <Avatar src="https://avatars.githubusercontent.com/primer"/>
      <Avatar src="https://avatars.githubusercontent.com/primer"/>
    </AvatarPair>
  )
}