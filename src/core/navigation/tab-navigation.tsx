import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import theme from '../../theme';
import DashboardScreen from '../../screens/dashboard-screen';
import MoviesScreen from '../../screens/movies-screen';

const Tab = createBottomTabNavigator();

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

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={tabNavigatorScreenOptions}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="movie" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
