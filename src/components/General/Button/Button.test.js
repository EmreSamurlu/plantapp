import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import Button from './Button';
import buttonStyles from './Button.styles';

describe('Button', () => {
  test('should match with snapshot', () => {
    const {getByTestId} = render(<Button />);
    expect(getByTestId('button')).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const {getByTestId} = render(
      <Button
        testID="button"
        title="Button"
        onPress={() => {}}
        style={buttonStyles.button}
      />,
    );

    expect(getByTestId('button')).toBeDefined();
  });

  it('should call onPress when button is pressed', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <Button
        testID="button"
        title="Button"
        onPress={onPress}
        style={buttonStyles.button}
      />,
    );

    fireEvent.press(getByTestId('button'));

    expect(onPress).toHaveBeenCalled();
  });
});
