import {StyleSheet} from 'react-native';

import {colors, fontSize, spacing} from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header_bg_container: {
    paddingHorizontal: spacing.lg,
  },
  header_bg: {
    opacity: 0.7,
    width: '160%',
    left: '-25%',
    bottom: '-100%',
  },
  greeting: {
    color: colors.text,
    fontSize: fontSize.md,
    fontFamily: 'Rubik-Regular',
  },
  greeting_bold: {
    color: colors.text,
    fontSize: fontSize.xl,
    fontFamily: 'Rubik-SemiBold',
  },
  inner_container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  premium_container: {
    marginVertical: spacing.lg,
    marginHorizontal: spacing.lg,
  },
});
