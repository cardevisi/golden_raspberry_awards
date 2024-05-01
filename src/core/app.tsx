import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoviesScreen from '../screens/movies-screen';
import DashboardScreen from '../screens/dashboard-screen';
import {ThemeProvider} from '@shopify/restyle';

import theme from '../theme';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Movies" component={MoviesScreen} />
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
