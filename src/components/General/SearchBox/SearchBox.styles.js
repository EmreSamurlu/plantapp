import {Platform, StyleSheet} from 'react-native';

import {colors, fontSize, radius, spacing} from '../../../styles';

export default StyleSheet.create({
  container: {
    marginVertical: spacing.md,
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical:
      Platform.OS === 'ios' ? spacing.sm + spacing.xs : spacing.xs,
    paddingHorizontal: spacing.md,
  },
  input_box: {
    marginHorizontal: spacing.sm,
    color: colors.text,
    fontSize: fontSize.md,
    fontFamily: 'Rubik-Regular',
  },
});
