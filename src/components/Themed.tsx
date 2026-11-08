/**
 * Themed components — use NativeWind theme (bg-background, text-foreground) when no override.
 * For web, theme follows html.dark from ThemeContext; use lightColor/darkColor to override.
 */

import React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors from '../constants/Colors';
import { useTheme } from '@/contexts/ThemeContext';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'] & { className?: string };
export type ViewProps = ThemeProps & DefaultView['props'] & { className?: string };

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const { colorScheme } = useTheme();
  const theme = colorScheme ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }
  return Colors[theme][colorName];
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, className, ...otherProps } = props;
  const themeColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const useThemeStyle = lightColor != null || darkColor != null;
  const themeClass = !useThemeStyle ? 'text-foreground' : '';

  return (
    <DefaultText
      className={[themeClass, className].filter(Boolean).join(' ')}
      style={[useThemeStyle && { color: themeColor }, style]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, className, ...otherProps } = props;
  const themeBg = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const useThemeStyle = lightColor != null || darkColor != null;
  const themeClass = !useThemeStyle ? 'bg-background' : '';

  return (
    <DefaultView
      className={[themeClass, className].filter(Boolean).join(' ')}
      style={[useThemeStyle && { backgroundColor: themeBg }, style]}
      {...otherProps}
    />
  );
}
