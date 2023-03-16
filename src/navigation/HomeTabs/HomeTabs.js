import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors} from '../../styles';
import routeNames from '../route-names';
import routes, {barStyle} from './routes';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={routeNames.Home}
      activeColor={colors.theme}
      screenOptions={{
        headerShown: false,
        tabBarStyle: barStyle,
        tabBarShowLabel: true,
      }}>
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
