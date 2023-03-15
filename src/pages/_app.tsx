import { AppProps } from 'next/app';

import '../styles/main.css';
import '../assets/styles/index.scss';

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{
  messages: Record<string, string>;
}>) => <Component {...pageProps} />;

export default MyApp;
