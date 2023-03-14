import {StyleSheet} from 'react-native';

import {colors, fontSize} from '../../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  heading_container: {
    margin: 24,
    fontSize: fontSize.xl,
    fontFamily: 'Rubik-Medium',
  },
  bold_text: {
    fontFamily: 'Rubik-Bold',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  bottom_container: {
    paddingHorizontal: 24,
  },
  underline: {
    height: 12,
    position: 'absolute',
    top: 105,
    left: 10,
  },
});
