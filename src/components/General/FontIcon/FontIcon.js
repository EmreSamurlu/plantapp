import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

const FontIcon = ({iconName, iconSize, iconColor}) => {
  return <Icon name={iconName} size={iconSize} color={iconColor} />;
};

export default FontIcon;
