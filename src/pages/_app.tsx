import { AppProps } from 'next/app';
import { NextIntlProvider } from 'next-intl';

import '../styles/main.css';
import '../styles/prism-a11y-dark.css';

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{
  messages: Record<string, string>;
}>) => (
  <NextIntlProvider messages={pageProps.messages}>
    <Component {...pageProps} />
  </NextIntlProvider>
);

export default MyApp;
