import React from 'react';
import {Image} from 'react-native';

import Images from '../../../assets/images';

const Visual = ({image, resizeMode, imageStyle}) => {
  console.log('Visual', Images[image]);
  return (
    <Image source={Images[image]} resizeMode={resizeMode} style={imageStyle} />
  );
};

export default Visual;
