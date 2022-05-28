import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
      text: string;
      background: string;
    };
    sizes: {
      appPadding: number;
    };
  }
}
