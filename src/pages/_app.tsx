import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import AppProvider from '../hooks';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp