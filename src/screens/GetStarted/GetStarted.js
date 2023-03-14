import React from 'react';
import {ImageBackground, SafeAreaView, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Button, Visual} from '../../components';
import routeNames from '../../navigation/route-names';
import styles from './GetStarted.styles';

const GetStarted = () => {
  const navigation = useNavigation();
  const handleStartPress = () => {
    navigation.navigate(routeNames.Onboarding);
  };

  const handleTermsPress = () => {
    console.log('Terms Pressed');
  };
  const handlePolicyPress = () => {
    console.log('Policy Pressed');
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading_container}>
          <Text style={styles.heading}>Welcome to </Text>
          <Text style={styles.appname}>PlantApp</Text>
        </Text>
        <Text style={styles.app_info_text}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
        <Visual
          image={'get-started'}
          imageStyle={styles.image}
          resizeMode={'contain'}
        />
        <View style={styles.bottom_container}>
          <Button label={'Get Started'} onPress={handleStartPress} />
          <Text style={styles.bottom_info_text}>
            <Text>By tapping next, you are agreeing to PlantID </Text>
            <Text style={styles.info_text} onPress={handleTermsPress}>
              Terms of Use
            </Text>
            <Text> & </Text>
            <Text style={styles.info_text} onPress={handlePolicyPress}>
              Privacy Policy.
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GetStarted;
