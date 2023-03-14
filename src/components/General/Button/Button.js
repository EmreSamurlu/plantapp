import React from 'react';
import {Pressable, Text} from 'react-native';

import styles from './Button.styles';

const Button = ({onPress, label}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default Button;
