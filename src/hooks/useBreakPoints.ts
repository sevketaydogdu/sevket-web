import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';

const useBreakPoints = () => {
  const { width } = useWindowDimensions();
  const isCompact = width < 1024;
  const isMobile = width < 768;

  return { isCompact, isMobile };
};

export { useBreakPoints };
