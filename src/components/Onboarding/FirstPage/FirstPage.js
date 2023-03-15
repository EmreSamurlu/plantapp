import React from 'react';
import {ImageBackground, SafeAreaView, Text} from 'react-native';

import {screenHeight} from '../../../constants/screenDimensions';
import {Visual} from '../../General';
import styles from './FirstPage.styles';

const FirstPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading_container}>
        <Text style={styles.text}>Take a photo to </Text>
        <ImageBackground
          source={require('../../../assets/images/brush.png')}
          resizeMode="contain"
          imageStyle={styles.image_underline}
          style={styles.bold_container}>
          <Text style={styles.bold_text}>identify</Text>
        </ImageBackground>
        <Text style={styles.text}>the plant!</Text>
      </Text>

      <Visual
        image={'onboarding-1'}
        imageStyle={[styles.image, {height: screenHeight * 0.65}]}
        resizeMode={'contain'}
      />
    </SafeAreaView>
  );
};

export default FirstPage;
