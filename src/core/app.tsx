import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import theme from '../theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import TabNavigation from './navigation/tab-navigation';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
