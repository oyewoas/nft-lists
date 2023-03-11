import { createTheme, ThemeOptions } from '@mui/material'

import { colors } from './colors'
import { mrSansSerifFontStack } from './font-utils'


const typography: ThemeOptions['typography'] = {
  fontFamily: mrSansSerifFontStack('Poppins'),
}
export const theme = createTheme({
  typography,
  palette: {
    mode: 'light',
    primary: {
      main: colors.base.blueSky,
      light: colors.base.littleBoyBlue,
      dark: colors.base.darkBlue,
    },

    secondary: {
      main: colors.base.freshMint,
      light: colors.base.lightMint,
      dark: colors.base.greenLeaf,
    },

    error: {
      main: colors.semantic.error,
      light: colors.semantic.errorGlow,
    },

    common: {
      black: colors.text.black,
      white: colors.text.white,
    },
  },
})