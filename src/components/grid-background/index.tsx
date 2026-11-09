import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export const GridBackground = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['rgba(251, 146, 60, 0.1)', 'transparent']} style={styles.wrapper}>
        {/* Horizontal lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <View key={`h-${i}`} style={[styles.horizontalContainer, { top: `${(i + 1) * 5}%` }]}>
            <LinearGradient
              colors={['transparent', 'rgb(251, 146, 60)', 'transparent']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0, 0.5, 1]}
              style={styles.horizontalLine}
            />
          </View>
        ))}

        {/* Vertical lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <View key={`v-${i}`} style={[styles.verticalContainer, { left: `${(i + 1) * 5}%` }]}>
            <LinearGradient
              colors={['transparent', 'rgb(251, 146, 60)', 'transparent']}
              locations={[0, 0.5, 1]}
              style={styles.verticalLine}
            />
          </View>
        ))}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    opacity: 0.1,
  },
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  horizontalContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
  },
  horizontalLine: {
    flex: 1,
    height: '100%',
  },
  verticalContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
  },
  verticalLine: {
    flex: 1,
    width: '100%',
  },
});
