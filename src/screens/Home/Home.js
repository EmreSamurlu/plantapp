import React, {useEffect} from 'react';
import {
  Alert,
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {PremiumBox, QuestionItem, SearchBox} from '../../components';
import getCategoriesThunk from '../../redux/features/getCategories/thunks/getCategoriesThunk';
import getQuestionsThunk from '../../redux/features/getQuestions/thunks/getQuestionsThunk';
import styles from './Home.styles';

const Home = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {categories} = useSelector(state => state.getCategories);
  const {questions} = useSelector(state => state.getQuestions);

  useEffect(() => {
    if (isFocused && !Object.keys(categories)?.length && !questions?.length) {
      dispatch(getQuestionsThunk());
      dispatch(getCategoriesThunk());
    }
  }, [categories, dispatch, isFocused, questions?.length]);

  // console.log('categories', categories);
  // console.log('questions', questions);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        imageStyle={styles.header_bg}
        style={styles.header_bg_container}
        source={require('../../assets/images/home-top-bg.png')}>
        <Text style={styles.greeting}>Hi, plant lover!</Text>
        <Text style={styles.greeting_bold}>Good Afternoon! ⛅</Text>
        <SearchBox />
      </ImageBackground>
      <View style={styles.inner_container}>
        <View style={styles.premium_container}>
          <PremiumBox
            onPremiumPress={() => Alert.alert('Premium Button Pressed')}
          />
        </View>
        <Text style={styles.get_started}>Get Started</Text>
        <View style={styles.question_container}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={styles.payment_listing}>
            {questions?.map((item, index) => {
              return (
                <QuestionItem
                  key={index}
                  description={item.description}
                  iconName={item.icon_name}
                  title={item.title}
                  iconSize={item.icon_size}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
