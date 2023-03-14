import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {Visual} from '../../General';
import styles from './SecondPage.styles';

const SecondPage = () => {
  return (
    <ImageBackground
      resizeMode="contain"
      source={require('../../../assets/images/onboarding-2-bg.png')}
      style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading_container}>
          <Text style={styles.text}>Get plant </Text>
          <Text style={styles.bold_text}>care guides</Text>
        </Text>
        <Visual
          image={'brush'}
          imageStyle={styles.underline}
          resizeMode={'contain'}
        />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          locations={[0, 0.8]}
          colors={['#ffffff00', '#ffffff']}
          style={styles.gradient_bottom}
        />
        <Visual
          image={'onboarding-2-art'}
          imageStyle={styles.art}
          resizeMode={'contain'}
        />
        <Visual
          image={'onboarding-2'}
          imageStyle={styles.image}
          resizeMode={'contain'}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SecondPage;
