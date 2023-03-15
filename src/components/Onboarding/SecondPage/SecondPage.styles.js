import {Platform, StyleSheet} from 'react-native';

import {colors, fontSize} from '../../../styles';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  heading_container: {
    margin: 24,
    fontSize: fontSize.xl,
    fontFamily: 'Rubik-Medium',
    color: colors.text,
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
    marginTop: '20%',
  },

  art: {
    position: 'absolute',
    height: 175,
    width: 175,
    top: Platform.OS === 'ios' ? '15%' : '10%',
    zIndex: 2,
    right: 0,
  },
  gradient_bottom: {
    height: 120,
    width: '100%',
    position: 'absolute',
    bottom: 96,
    zIndex: 1,
  },
  bottom_container: {
    paddingHorizontal: 24,
  },
  underline: {
    height: 18,
    position: 'absolute',
    top: 105,
    right: '20%',
    width: 150,
  },
});
