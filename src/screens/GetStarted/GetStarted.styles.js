import {StyleSheet} from 'react-native';

import {colors, fontSize, spacing} from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  heading_container: {
    fontSize: fontSize.xxl,
    color: colors.text,
    paddingHorizontal: spacing.lg,
  },
  heading: {
    fontFamily: 'Rubik-Regular',
  },
  appname: {
    fontFamily: 'Rubik-Bold',
  },
  app_info_text: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.sm,
    width: '85%',
    fontSize: fontSize.md,
    fontFamily: 'Rubik-Regular',
    color: colors.text,
    opacity: 0.7,
    lineHeight: fontSize.lg,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  bottom_container: {
    paddingHorizontal: spacing.lg,
  },
  bottom_info_text: {
    marginTop: spacing.md,
    alignSelf: 'center',
    width: '75%',
    fontSize: fontSize.sm,
    fontFamily: 'Rubik-Regular',
    opacity: 0.5,
    color: colors.text,
    textAlign: 'center',
  },
  info_text: {
    textDecorationLine: 'underline',
  },
});
