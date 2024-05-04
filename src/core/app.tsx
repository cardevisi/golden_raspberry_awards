import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoviesScreen from '../screens/movies-screen';
import DashboardScreen from '../screens/dashboard-screen';
import {ThemeProvider} from '@shopify/restyle';

import theme from '../theme';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

const tabNavigatorScreenOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: theme.colors.black,
    borderTopColor: theme.colors.white,
    height: 80,
    paddingBottom: 20,
    paddingTop: 10,
  },
  tabBarHideOnKeyboard: true,
  tabBarShowLabel: true,
};

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={tabNavigatorScreenOptions}>
            <Tab.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <MaterialIcons name="dashboard" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Movies"
              component={MoviesScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <MaterialIcons name="movie" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
