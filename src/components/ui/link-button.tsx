import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { FC } from 'react';
import { View, Pressable, StyleSheet, TextProps, ViewProps } from 'react-native';
import { Text } from 'tamagui';

import Colors from '@/constants/Colors';

export type AntDesignIconName = keyof typeof AntDesign.glyphMap;

interface LinkButtonProps {
  href: string;
  children?: string;
  iconName?: AntDesignIconName;
  circular?: boolean;
  fontStyles?: TextProps['style'];
  containerStyles?: ViewProps['style'];
  targetBlank?: boolean;
}
const LinkButton: FC<LinkButtonProps> = ({
  href,
  children,
  iconName,
  circular = false,
  fontStyles,
  containerStyles = {},
  targetBlank = false,
}) => {
  console.log('🚀 ~ typeof fontStyles:', fontStyles);

  return (
    <Link
      href={href as `http${string}`}
      asChild
      hrefAttrs={{
        target: targetBlank ? '_blank' : '_self',
        rel: targetBlank ? 'noopener noreferrer' : '',
      }}>
      <Pressable>
        {({ hovered }) => (
          <View
            style={{
              ...styles.innerPressable,
              ...(hovered && styles.innerPressableHover),
              ...(circular && styles.circularPressable),
              transform: [{ scale: hovered ? 0.98 : 1 }],
              ...(typeof containerStyles === 'object' ? containerStyles : {}),
            }}>
            {iconName && (
              <View style={{ aspectRatio: 1 }}>
                <AntDesign
                  name={iconName}
                  size={24}
                  style={hovered ? styles.iconHover : styles.icon}
                />
              </View>
            )}
            <Text
              style={{
                ...styles.text,
                ...(hovered && styles.iconHover),

                ...(typeof fontStyles === 'object' ? fontStyles : {}),
              }}>
              {children}
            </Text>
          </View>
        )}
      </Pressable>
    </Link>
  );
};
export default LinkButton;

const styles = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressableHover: {
    backgroundColor: Colors.dark.orange[200],
  },
  circularPressable: {
    borderRadius: 56,
  },
  text: {
    color: Colors.dark.white[200],
  },
  icon: {
    color: Colors.dark.white[100],
  },
  iconHover: {
    color: Colors.dark.black[200],
  },
  innerPressableHover: {
    backgroundColor: Colors.dark.orange[100],

    //
  },
  innerPressable: {
    alignItems: 'center',
    justifyContent: 'center',
    // gap: 4,
    padding: 8,
    // borderRadius: 8,
    backgroundColor: Colors.dark.black[200],
  },
});
