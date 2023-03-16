import {StyleSheet} from 'react-native';

import {colors, fontSize, radius, spacing} from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paymentBackground,
  },
  background: {
    justifyContent: 'center',
  },
  close_container: {
    backgroundColor: colors.blur,
    borderRadius: radius.xxl,
    padding: 4,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '5%',
    right: 24,
  },
  close_label: {
    textAlign: 'center',
    fontFamily: 'Rubik-Regular',
    color: colors.secondaryText,
  },
  appname_container: {
    color: colors.secondaryText,
    fontSize: fontSize.xxl,
    fontFamily: 'Rubik-Light',
    marginHorizontal: spacing.lg,
    marginTop: '48%',
  },
  appname: {
    fontFamily: 'Rubik-Bold',
  },
  premium_text: {},
  subtext: {
    marginHorizontal: spacing.lg,
    color: colors.secondaryText,
    fontSize: fontSize.md,
    fontFamily: 'Rubik-Light',
    opacity: 0.7,
  },
  payment_container: {
    marginTop: spacing.md,
    height: 130,
  },

  payment_listing: {
    marginHorizontal: spacing.lg - 4,
    marginRight: spacing.lg,
    paddingRight: spacing.xl,
  },

  premium_selection_box: {
    marginHorizontal: spacing.lg,
  },
  bottom_container: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.sm,
  },
  bottom_info: {
    textAlign: 'center',
    fontSize: fontSize.xs,
    color: colors.secondaryText,
    fontFamily: 'Rubik-Light',
    marginTop: spacing.sm,
    opacity: 0.5,
  },
  bottom_terms: {
    marginTop: spacing.sm,
    textAlign: 'center',
    fontSize: fontSize.sm,
    color: colors.secondaryText,
    fontFamily: 'Rubik-Light',
    opacity: 0.5,
  },
});
