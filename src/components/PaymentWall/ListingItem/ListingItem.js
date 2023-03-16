import React from 'react';
import {Text, View} from 'react-native';

import {colors} from '../../../styles';
import {Icon} from '../../General';
import styles from './ListingItem.styles';

const ListingItem = ({title, description, iconName, iconSize}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon
          iconName={iconName}
          iconColor={colors.secondaryText}
          iconSize={iconSize}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default ListingItem;
