import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Head from 'next/head';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>UpFi</title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
