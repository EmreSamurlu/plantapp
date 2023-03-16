import React from 'react';
import {Pressable, Text, View} from 'react-native';

import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

import {colors} from '../../../styles';
import {FontIcon, Icon} from '../../General';
import styles from './PremiumBox.styles';

const PremiumBox = ({onPremiumPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPremiumPress}>
      <MaskedView
        style={styles.masked_view}
        maskElement={
          <View style={styles.maskElementView}>
            <Icon iconName={'mail'} iconSize={32} />
            <View style={styles.maskElementText}>
              <Text style={styles.label_free}>FREE Premium Available</Text>
              <Text style={styles.label_desc}>
                Tap to upgrade your account!
              </Text>
            </View>
            <View style={styles.right_icon}>
              <FontIcon iconName={'angle-right'} iconSize={24} />
            </View>
          </View>
        }>
        <LinearGradient
          colors={[colors.gradientOne, colors.gradientTwo]}
          start={{x: 0.2, y: 1}}
          end={{x: 0.7, y: 1}}
          locations={[0.45, 0.7]}
          style={styles.gradient}
        />
      </MaskedView>
    </Pressable>
  );
};

export default PremiumBox;
