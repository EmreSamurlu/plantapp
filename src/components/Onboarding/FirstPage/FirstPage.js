import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {Visual} from '../../General';
import styles from './FirstPage.styles';

const FirstPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading_container}>
        <Text style={styles.text}>Take a photo to </Text>
        <Text style={styles.bold_text}>identify</Text>
        <Text style={styles.text}> the plant!</Text>
      </Text>
      <Visual
        image={'brush'}
        imageStyle={styles.underline}
        resizeMode={'contain'}
      />
      <Visual
        image={'onboarding-1'}
        imageStyle={styles.image}
        resizeMode={'contain'}
      />
    </SafeAreaView>
  );
};

export default FirstPage;
