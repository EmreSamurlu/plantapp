import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {screenHeight} from '../../../constants/screenDimensions';
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
          <ImageBackground
            source={require('../../../assets/images/brush.png')}
            resizeMode="contain"
            imageStyle={styles.image_underline}
            style={styles.bold_container}>
            <Text style={styles.bold_text}>care guides</Text>
          </ImageBackground>
        </Text>
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
          imageStyle={[styles.image, {height: screenHeight * 0.62}]}
          resizeMode={'contain'}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SecondPage;
