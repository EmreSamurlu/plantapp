import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import routes from './routes';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      {routes.map((route, index) => (
        <Tab.Screen
          name={route.name}
          key={index}
          component={route.component}
          options={route.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeTabs;
