import React from 'react';

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

import icoMoonConfig from '../../../assets/Fonts/selection.json';

const Visual = createIconSetFromIcoMoon(
  icoMoonConfig,
  'hubx-icons',
  'hubx-icons.ttf',
);

const Icon = ({iconName, iconSize, iconColor, props}) => {
  return (
    <Visual name={iconName} size={iconSize} color={iconColor} {...props} />
  );
};

export default Icon;
