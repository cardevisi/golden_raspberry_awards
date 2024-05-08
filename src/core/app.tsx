import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from '../theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Router from './routes/router';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
