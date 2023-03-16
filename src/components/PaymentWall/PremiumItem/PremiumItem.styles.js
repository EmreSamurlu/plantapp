import {StyleSheet} from 'react-native';

import {colors, fontSize, radius, spacing} from '../../../styles';

export default StyleSheet.create({
  radioButton: {
    alignItems: 'center',
    marginVertical: spacing.sm,
    flexDirection: 'row',
    backgroundColor: colors.blur,
    borderRadius: radius.lg,
    paddingVertical: spacing.sm,
    paddingLeft: spacing.md,
    borderWidth: 1,
  },

  button: {
    height: fontSize.xl,
    width: fontSize.xl,
    borderRadius: radius.xxxl,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blur,
    marginRight: spacing.md,
  },
  selectedButton: {
    borderWidth: 8,
    width: spacing.lg,
    height: spacing.lg,
    borderRadius: radius.xxxl,
    borderColor: colors.theme,
    backgroundColor: colors.secondaryText,
  },

  text_container: {},
  title: {
    fontSize: fontSize.md,
    color: colors.secondaryText,
    fontFamily: 'Rubik-Medium',
    marginTop: spacing.xs,
  },
  description: {
    marginBottom: spacing.xs,
    fontSize: fontSize.sm,
    color: colors.secondaryText,
    opacity: 0.7,
    fontFamily: 'Rubik-Light',
  },
  save_container: {
    position: 'absolute',
    padding: spacing.xs,
    borderBottomLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    backgroundColor: colors.theme,
    top: -1,
    right: -1,
    width: 77,
    height: 26,
    justifyContent: 'center',
  },
  save_label: {
    fontFamily: 'Rubik-Medium',
    color: colors.secondaryText,
    fontSize: fontSize.sm,
    textAlign: 'center',
  },
});
