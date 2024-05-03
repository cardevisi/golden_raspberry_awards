import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoviesScreen from '../screens/movies-screen';
import DashboardScreen from '../screens/dashboard-screen';
import {ThemeProvider} from '@shopify/restyle';

import theme from '../theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {tabNavigatorScreenOptions} from './config';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={() => tabNavigatorScreenOptions(theme)}>
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Movies" component={MoviesScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
