import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import TabNavigation from '../navigation/tab-navigation';

function Router() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

export default Router;
