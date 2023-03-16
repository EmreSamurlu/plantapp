import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {colors} from '../../../styles';
import styles from './PremiumItem.styles';

const PremiumItem = ({onSelect, isSelected, title, description}) => {
  const handleButtonPress = () => {
    onSelect();
  };

  return (
    <Pressable
      style={[
        styles.radioButton,
        {borderColor: isSelected ? colors.theme : colors.borderColor},
      ]}
      onPress={handleButtonPress}>
      <View style={styles.button}>
        {isSelected && <View style={styles.selectedButton} />}
      </View>
      <View style={styles.text_container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {title === '1 Year' && (
        <View style={styles.save_container}>
          <Text style={styles.save_label}>Save 50%</Text>
        </View>
      )}
    </Pressable>
  );
};

export default PremiumItem;
