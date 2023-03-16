import React from 'react';
import {TextInput, View} from 'react-native';

import {colors} from '../../../styles';
import Icon from '../Icon';
import styles from './SearchBox.styles';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <Icon
        iconColor={colors.passiveColor}
        iconSize={24}
        iconName={'magnify'}
      />
      <TextInput
        placeholder="Search for plants"
        autoCorrect={false}
        autoCapitalize="none"
        placeholderTextColor={colors.passiveColor}
        style={styles.input_box}
      />
    </View>
  );
};

export default SearchBox;
