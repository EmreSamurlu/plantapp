import React, {useState} from 'react';
import {Text, View} from 'react-native';

import Swiper from 'react-native-swiper';

import {FirstPage, PaymentWall, SecondPage, Visual} from '../../components';

const Onboarding = () => {
  const [index, setIndex] = useState(0);
  return (
    <View style={{flex: 1}}>
      <Swiper
        dotColor="black"
        activeDotColor="red"
        loop={false}
        index={0}
        onIndexChanged={_index => {
          setIndex(_index);
        }}
        showsPagination={index === 2 ? false : true}
        activeDotStyle={{
          width: 16,
          height: 16,
          borderRadius: 8,
        }}>
        <View style={{flex: 1}}>
          <FirstPage />
        </View>
        <View style={{flex: 1}}>
          <SecondPage />
        </View>
        <View style={{flex: 1}}>
          <PaymentWall />
        </View>
      </Swiper>
    </View>
  );
};

export default Onboarding;
