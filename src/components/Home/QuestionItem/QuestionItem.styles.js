import {StyleSheet} from 'react-native';

import {colors, fontSize, radius, spacing} from '../../../styles';

export default StyleSheet.create({
  container: {
    width: 240,
    height: 164,
    borderRadius: radius.lg,
    marginHorizontal: spacing.xs,
  },
  bg_image: {
    borderRadius: radius.lg,
    width: 240,
    height: 164,
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  bg_container: {
    flex: 1,
  },
  title_container: {
    position: 'absolute',
    bottom: 0,
    height: 64,
    width: 240,
    padding: spacing.sm,
  },
  title: {
    color: colors.secondaryText,
    fontFamily: 'Rubik-Medium',
    fontSize: fontSize.md,
  },
});
