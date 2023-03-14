import {StyleSheet} from 'react-native';

import {colors, fontSize, radius, spacing} from '../../../styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: spacing.xxxl,
    borderRadius: radius.lg,
    backgroundColor: colors.theme,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: colors.secondaryText,
    fontWeight: '700',
    fontSize: fontSize.md,
  },
});
