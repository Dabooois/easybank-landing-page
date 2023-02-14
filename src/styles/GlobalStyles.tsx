// src/styles/GlobalStyles.tsx
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
  '*,*::before,*::after': {
    boxSizing: 'border-box',
  },
  html: {
    fontFamily: 'Public Sans',
    boxSizing: 'inherit',
    fontSize: '62.5%',
  },
  '.container': {
    maxWidth: '144rem',
    paddingInline: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
