import {StyleSheet} from 'react-native';

import {colors, fontSize, radius, spacing} from '../../../styles';

export default StyleSheet.create({
  container: {
    borderWidth: 0.5,
    width: 158,
    height: 152,
    marginBottom: spacing.md,
    borderRadius: radius.md,
    borderColor: '#29BB892E',
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  image_style: {
    borderRadius: radius.md,
    position: 'absolute',
    right: -20,
  },
  title: {
    width: '80%',
    fontFamily: 'Rubik-Medium',
    fontSize: fontSize.md,
  },
});
