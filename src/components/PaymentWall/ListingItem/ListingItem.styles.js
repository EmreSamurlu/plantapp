import {StyleSheet} from 'react-native';

import {colors, fontSize, radius, spacing} from '../../../styles';

export default StyleSheet.create({
  container: {
    width: 160,
    height: 130,
    backgroundColor: colors.blur,
    borderRadius: radius.lg,
    marginHorizontal: 4,
    flex: 1,
    padding: spacing.md,
  },
  title: {
    fontFamily: 'Rubik-Medium',
    color: colors.secondaryText,
    fontSize: 20,
  },
  description: {
    fontFamily: 'Rubik-Light',
    color: colors.secondaryText,
    opacity: 0.7,
  },
  icon: {
    backgroundColor: colors.iconBackground,
    width: 36,
    height: 36,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
});
