import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {},
  colors: {
    bilibili: '#FB7299'
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Open Sans', sans-serif`
  },
  config: {
    useSystemColorMode: true
  }
});

export default theme;
