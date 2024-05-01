import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoviesScreen from '../screens/movies-screen';
import DashboardScreen from '../screens/dashboard-screen';
import {ThemeProvider} from '@shopify/restyle';

import theme from '../theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
              headerShown: false,
              tabBarStyle: {
                backgroundColor: theme.colors.black,
                borderTopColor: theme.colors.white,
                height: 60,
                paddingBottom: 10,
                paddingTop: 10,
              },
              tabBarHideOnKeyboard: true,
              tabBarShowLabel: true,
            }}>
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Movies" component={MoviesScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
