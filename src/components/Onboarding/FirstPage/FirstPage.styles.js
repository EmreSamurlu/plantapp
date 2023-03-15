import {Platform, StyleSheet} from 'react-native';

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
    color: colors.text,
    justifyContent: 'center',
  },

  image_underline: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: 12,
    top: 30,
  },
  bold_text: {
    fontSize: fontSize.xl,
    fontFamily: 'Rubik-Bold',
    lineHeight: fontSize.xl,
    color: colors.text,
    marginBottom: Platform.OS === 'ios' ? -4 : -6,
  },
  image: {
    width: '100%',
  },
});
