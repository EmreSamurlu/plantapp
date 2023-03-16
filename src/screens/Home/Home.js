import React, {useEffect} from 'react';
import {
  Alert,
  ImageBackground,
  Linking,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {
  CategoryItem,
  PremiumBox,
  QuestionItem,
  SearchBox,
} from '../../components';
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

  const handleQuestionPress = async item => {
    await Linking.openURL(item.uri);
  };

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
      <ScrollView style={styles.inner_container}>
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
            contentContainerStyle={styles.question_listing}>
            {questions?.map((item, index) => {
              return (
                <QuestionItem
                  key={index}
                  imageUrl={item.image_uri}
                  onQuestionPress={() => handleQuestionPress(item)}
                  title={item.title}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.category_container}>
          {categories?.data?.map((item, index) => {
            return (
              <CategoryItem
                key={index}
                imageUrl={item?.image?.url}
                onQuestionPress={() => handleQuestionPress(item)}
                title={item.title}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
