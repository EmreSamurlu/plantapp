import {StyleSheet} from 'react-native';

import {colors, fontSize, radius, spacing} from '../../styles';

export default StyleSheet.create({
  dot: {
    bottom: 24,
    width: 8,
    height: 8,
  },
  button_wrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: '35%',
    justifyContent: 'center',
  },
  prev_button: {backgroundColor: 'transparent'},
  next_button_container: {
    height: spacing.xxxl,
    borderRadius: radius.lg,
    backgroundColor: colors.theme,
    justifyContent: 'center',
    alignItems: 'center',
  },
  next_button_label: {
    color: colors.secondaryText,
    fontWeight: '700',
    fontSize: fontSize.md,
  },
  active_dot: {
    width: 10,
    height: 10,
    borderRadius: 8,
    bottom: 24,
  },
  page_container: {flex: 1},
});
