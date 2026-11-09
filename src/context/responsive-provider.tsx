import React, { createContext, useContext } from 'react';
import { Dimensions, DimensionValue } from 'react-native';

interface IResponsiveProps {
  responsiveWidth: DimensionValue | undefined;
}

const DefaultResponsiveContext: IResponsiveProps = {
  responsiveWidth: undefined,
};

const ResponsiveContext = createContext(DefaultResponsiveContext);
const { width: screenWidth } = Dimensions.get('window');

export const ResponsiveProvider = ({ children }: { children: React.ReactNode }) => {
  const responsiveWidth: DimensionValue | undefined = screenWidth > 1200 ? '100%' : screenWidth;

  const values: IResponsiveProps = { responsiveWidth };

  return <ResponsiveContext.Provider value={values}>{children}</ResponsiveContext.Provider>;
};

export const useResponsive = () => {
  return useContext(ResponsiveContext);
};
