import { TDefault } from '../theme/defaultTheme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends TDefault {}
}
