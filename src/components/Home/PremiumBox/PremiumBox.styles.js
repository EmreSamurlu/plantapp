import {StyleSheet} from 'react-native';

import {colors, fontSize, radius, spacing} from '../../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.premiumBackground,
    borderRadius: radius.lg,
    padding: spacing.xs * 3,
    height: 64,
  },
  masked_view: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
  },
  maskElementView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  maskElementText: {
    marginHorizontal: spacing.lg,
  },
  right_icon: {
    marginLeft: 'auto',
  },
  label_free: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: fontSize.md,
  },
  label_desc: {
    fontFamily: 'Rubik-Regular',
    fontSize: fontSize.sm,
    opacity: 0.7,
  },

  gradient: {flex: 1, height: '100%'},
});
