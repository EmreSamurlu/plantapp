import React from 'react';
import {Image} from 'react-native';

import Images from '../../../assets/images';

const Visual = ({image, resizeMode, imageStyle}) => {
  return (
    <Image source={Images[image]} resizeMode={resizeMode} style={imageStyle} />
  );
};

export default Visual;
