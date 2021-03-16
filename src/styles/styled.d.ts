import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string,
      primary: string,
      purpleLight: string,
      purpleMedium: string,
      purpleDarken: string,
      greenLight: string,
      greenDarken: string,
      danger: string,
      backLine: string,
      backHover: string,
      backBg: string,
      shape01: string,
      shape02: string,
      shapeDisable: string,
      textTitle: string,
      textBase: string,
      textCompl: string,
      textInput: string,
      textInPupleTitle: string,
      textInPupleBase: string,
      textInPupleCompl: string,
    },
    fontSizes: {
      default: string;
      huge: string;
      small: string;
      tiny: string;
    },
    spacing: {
      default: string;
      vertical: string;
      horizontal: string;
      huge: string;
    }
  }
}