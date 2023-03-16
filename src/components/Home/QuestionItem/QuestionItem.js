import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';

import styles from './QuestionItem.styles';

const QuestionItem = ({imageUrl, onQuestionPress, title}) => {
  return (
    <Pressable onPress={onQuestionPress} style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        style={styles.bg_container}
        imageStyle={styles.bg_image}
        source={{uri: imageUrl}}>
        <View style={styles.title_container}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default QuestionItem;
