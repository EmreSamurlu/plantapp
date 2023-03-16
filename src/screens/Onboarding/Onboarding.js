import React, {useState} from 'react';
import {Dimensions, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import {Button, FirstPage, SecondPage} from '../../components';
import {colors} from '../../styles';
import styles from './Onboarding.styles';

const {width} = Dimensions.get('window');

const Onboarding = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.page_container}>
      <Swiper
        dotStyle={styles.dot}
        buttonWrapperStyle={styles.button_wrapper}
        prevButton={<View style={styles.prev_button} />}
        nextButton={
          <View style={[styles.next_button_container, {width: width - 48}]}>
            <Text style={styles.next_button_label}>Continue</Text>
          </View>
        }
        dotColor="#13231B40"
        activeDotColor={colors.text}
        loop={false}
        index={0}
        onIndexChanged={_index => {
          setIndex(_index);
        }}
        showsButtons={true}
        showsPagination={index === 2 ? false : true}
        activeDotStyle={styles.active_dot}>
        <View style={styles.page_container}>
          <FirstPage />
        </View>
        <View style={styles.page_container}>
          <SecondPage />
          <View style={styles.next_button}>
            <Button
              label={'Continue'}
              onPress={() => navigation.navigate('PaymentWall')}
            />
          </View>
        </View>
      </Swiper>
    </View>
  );
};

export default Onboarding;
