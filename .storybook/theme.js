import { create } from '@storybook/theming/create';
import theme from '../src/theme'

export default create({

  colorPrimary: theme.colors.blue[4],
  colorSecondary: theme.colors.blue[4],

  // UI
  appBg: 'rgb(27, 31, 35)',
  appContentBg: 'rgb(250, 251, 252)',
  appBorderColor: 'rgb(225, 228, 232)',
  appBorderRadius: 3,

  // Typography
  fontBase: theme.fonts.normal,
  fontCode: 'monospace',

  // Text colors
  textColor: 'rgb(219, 237, 255)',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'rgb(250, 251, 252)',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Primer Components',
  brandUrl: 'https://primer.style/components',
  brandImage: 'https://user-images.githubusercontent.com/8960591/73501817-e299f380-437b-11ea-971a-9d000780f2ac.png',
});