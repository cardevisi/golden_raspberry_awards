import {createTheme} from '@shopify/restyle';
import palette from './colors';
import spacing from './spacing';
import textVariants from './text-variants';

const theme = createTheme({
  colors: {
    white: palette.white,
    black: palette.black,
    primary_001: palette.purplePrimary,
    primary_002: palette.greenPrimary,
    primary_003: palette.purpleDark,
    primary_004: palette.greenDark,
    primary_005: palette.purpleLight,
    primary_006: palette.greenLight,
    primary_007: palette.black,
  },
  spacing,
  textVariants,
});

export type ThemeProps = typeof theme;
export default theme;
