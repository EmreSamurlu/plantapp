import React from 'react';
import {Pressable, Text} from 'react-native';

import {Icon} from '../../components';
import {Diagnose, Home, MyGarden, Profile, Scanner} from '../../screens';
import {colors, radius, spacing} from '../../styles';

export default [
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarButton: props => (
        <Pressable onPress={() => props.onPress()} style={barItemStyle}>
          <Icon
            iconName={'home'}
            iconColor={
              props.accessibilityState.selected
                ? colors.theme
                : colors.passiveColor
            }
            iconSize={26}
            onIconPress={() => props.onPress()}
          />
          <Text
            style={[
              tabBarLabelStyle,
              {
                color: props.accessibilityState.selected
                  ? colors.theme
                  : colors.passiveColor,
              },
            ]}>
            Home
          </Text>
        </Pressable>
      ),
    },
  },
  {
    name: 'Diagnose',
    component: Diagnose,
    options: {
      tabBarShowLabel: true,
      tabBarButton: props => (
        <Pressable onPress={() => props.onPress()} style={barItemStyle}>
          <Icon
            iconName={'healthcare-1'}
            iconColor={
              props.accessibilityState.selected
                ? colors.theme
                : colors.passiveColor
            }
            iconSize={26}
            onIconPress={() => props.onPress()}
          />
          <Text
            style={[
              tabBarLabelStyle,
              {
                color: props.accessibilityState.selected
                  ? colors.theme
                  : colors.passiveColor,
              },
            ]}>
            Diagnose
          </Text>
        </Pressable>
      ),
    },
  },
  {
    name: 'Scanner',
    component: Scanner,
    options: {
      tabBarButton: props => (
        <Pressable onPress={() => props.onPress()} style={scannerStyle}>
          <Icon
            iconName={'scanner'}
            iconColor={colors.secondaryText}
            iconSize={26}
            onIconPress={() => props.onPress()}
          />
        </Pressable>
      ),
    },
  },
  {
    name: 'MyGarden',
    component: MyGarden,
    options: {
      tabBarButton: props => (
        <Pressable onPress={() => props.onPress()} style={barItemStyle}>
          <Icon
            iconName={'garden'}
            iconColor={
              props.accessibilityState.selected
                ? colors.theme
                : colors.passiveColor
            }
            iconSize={26}
            onIconPress={() => props.onPress()}
          />
          <Text
            style={[
              tabBarLabelStyle,
              {
                color: props.accessibilityState.selected
                  ? colors.theme
                  : colors.passiveColor,
              },
            ]}>
            My Garden
          </Text>
        </Pressable>
      ),
    },
  },
  {
    name: 'Profile',
    component: Profile,
    options: {
      tabBarButton: props => {
        return (
          <Pressable onPress={() => props.onPress()} style={barItemStyle}>
            <Icon
              iconName={'profile'}
              iconColor={
                props.accessibilityState.selected
                  ? colors.theme
                  : colors.passiveColor
              }
              iconSize={26}
              onIconPress={() => props.onPress()}
            />
            <Text
              style={[
                tabBarLabelStyle,
                {
                  color: props.accessibilityState.selected
                    ? colors.theme
                    : colors.passiveColor,
                },
              ]}>
              Profile
            </Text>
          </Pressable>
        );
      },
    },
  },
];

export const barStyle = {
  backgroundColor: colors.background,
  activeColor: 'red',
  alignItems: 'center',
  height: '9%',
};
const tabBarLabelStyle = {
  fontSize: 12,
  fontFamily: 'Rubik-Regular',
};

const scannerStyle = {
  borderWidth: 4,
  borderColor: '#2CCC80',
  width: 64,
  height: 64,
  justifyContent: 'center',
  alignItems: 'center',
  bottom: 20,
  borderRadius: radius.xl * 2,
  backgroundColor: colors.theme,
};
const barItemStyle = {
  width: '20%',
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: spacing.sm,
};
