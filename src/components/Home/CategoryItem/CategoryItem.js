import React from 'react';
import {ImageBackground, Text} from 'react-native';

import styles from './CategoryItem.styles';

const CategoryItem = ({title, imageUrl}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={{uri: imageUrl}}
      imageStyle={styles.image_style}
      style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  );
};

export default CategoryItem;
