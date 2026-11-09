import React from 'react';
import { View, ViewStyle, ViewProps, useWindowDimensions } from 'react-native';

// Define breakpoint types
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Define a type for responsive style objects
interface ResponsiveStyleObject {
  xs?: ViewStyle;
  sm?: ViewStyle;
  md?: ViewStyle;
  lg?: ViewStyle;
  xl?: ViewStyle;
  $xs?: ViewStyle;
  $sm?: ViewStyle;
  $md?: ViewStyle;
  $lg?: ViewStyle;
  $xl?: ViewStyle;
  $gtXs?: ViewStyle;
  $gtSm?: ViewStyle;
  $gtMd?: ViewStyle;
  $gtLg?: ViewStyle;
  $gtXl?: ViewStyle;
}

// Breakpoint configuration
const BREAKPOINTS = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1440,
};

// Utility to get responsive styles
const useResponsiveStyle = (styles?: ResponsiveStyleObject): ViewStyle => {
  const { width } = useWindowDimensions();

  // Merge styles based on current width
  const mergeStyles = (): ViewStyle => {
    let mergedStyle: ViewStyle = {};

    // Base styles (xs)
    if (styles?.$xs || styles?.xs) {
      mergedStyle = { ...mergedStyle, ...(styles.$xs || styles.xs) };
    }

    // Greater than breakpoint styles
    const breakpointOrder: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl'];

    breakpointOrder.forEach((bp) => {
      if (width >= BREAKPOINTS[bp]) {
        // Specific breakpoint styles
        if (styles?.[bp]) mergedStyle = { ...mergedStyle, ...styles[bp] };

        // Greater than breakpoint styles
        const gtKey =
          `$gt${bp.charAt(0).toUpperCase() + bp.slice(1)}` as keyof ResponsiveStyleObject;
        if (styles?.[gtKey]) mergedStyle = { ...mergedStyle, ...styles[gtKey] };
      }
    });

    return mergedStyle;
  };

  return mergeStyles();
};

// Responsive View Component
const ResponsiveView: React.FC<
  ViewProps & {
    $gtLg?: ViewStyle;
    $gtMd?: ViewStyle;
    $gtSm?: ViewStyle;
    $gtXs?: ViewStyle;
    $xs?: ViewStyle;
    log?: boolean;
  }
> = ({ $gtLg, $gtMd, $gtSm, $gtXs, $xs, log = false, style, ...props }) => {
  // Combine all responsive styles into a single object
  const responsiveStyleObject: ResponsiveStyleObject = {
    $gtLg,
    $gtMd,
    $gtSm,
    $gtXs,
    $xs,
  };

  // Get responsive styles
  const responsiveStyle = useResponsiveStyle(responsiveStyleObject);
  if (log) console.log('🚀 ~ responsiveStyle:', responsiveStyle);

  // Combine styles: priority order is style prop > responsive style > component-specific styles
  return <View {...props} style={[responsiveStyle, style]} />;
};

export { ResponsiveView, useResponsiveStyle, BREAKPOINTS };
