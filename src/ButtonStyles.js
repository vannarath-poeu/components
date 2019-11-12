import {css} from 'styled-components'
import {get} from './constants'

export default css`
  position: relative;
  display: inline-block;
  padding: 6px 12px;
  color: ${get('colors.button.default.text')};
  background-color: ${get('colors.button.default.bg')};
  background-image: linear-gradient(-180deg, ${get('colors.button.default.gradient1')} 0%, ${get('colors.button.default.gradient2')} 90%);
  font-size: ${get('fontSizes.1')}px;
  font-weight: ${get('fontWeights.bold')};
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  background-size: 110% 110%;
  border: 1px solid ${get('colors.button.default.border')};
  border-radius: 0.25em;
  appearance: none;
  text-decoration: none;

  &:hover {
    background-color: ${get('colors.button.default.hoverBg')};
    background-image: linear-gradient(-180deg, ${get('colors.button.default.gradient2')} 0%, ${get('colors.button.hoverBg')} 90%); // not sure if these should have their own theme variables?
    background-position: -0.5em center;
    border-color: ${get('colors.button.deault.hoverBorder')}; 
    text-decoration: none;
    background-repeat: repeat-x;
  }

  &:active {
    background-color: ${get('colors.button.default.activeBg')};
    background-image: none;
    box-shadow: ${get('colors.button.default.activeBoxShadow')} 0px 0.15em 0.3em inset;
    border-color: ${get('colors.button.default.activeBorder')}; // why does this exist? it's the same color as the default border?
  }

  ${props =>
    props.disabled &&
    css`
      color: ${get('colors.button.disabledColor')} !important;
      background-color: ${get('colors.gray.1')} !important;
      background-image: none !important;
      border-color: ${get('colors.blackfade20')} !important;
      box-shadow: none !important;
      cursor: default;
    `}

  &:focus {
    outline: none;
    box-shadow: ${get('colors.button.focusShadow')} 0px 0px 0px 0.2em;
  }

  &.grouped {
    position: relative;
    border-right-width: 0;
    border-radius: 0;

    &:first-child {
      border-top-left-radius: ${get('radii.1')}px;
      border-bottom-left-radius: ${get('radii.1')}px;
    }

    &:last-child {
      border-right-width: 1px;
      border-top-right-radius: ${get('radii.1')}px;
      border-bottom-right-radius: ${get('radii.1')}px;
    }

    &:focus,
    &:active,
    &:hover {
      border-right-width: 1px;

      + .grouped {
        border-left-width: 0;
      }
    }
  }
  &:focus,
  &:active {
    z-index: 1;
  }
`
