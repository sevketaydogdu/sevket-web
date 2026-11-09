import React, { createContext, useContext } from 'react';

interface IMainScrollProps {
  scrollY: number;
}

const DefaultMainScrollContext: IMainScrollProps = {
  scrollY: 0,
};

const MainScrollContext = createContext(DefaultMainScrollContext);

export const MainScrollProvider = ({
  scrollY,
  children,
}: {
  scrollY: number;

  children: React.ReactNode;
}) => {
  const values = { scrollY };

  return <MainScrollContext.Provider value={values}>{children}</MainScrollContext.Provider>;
};

export const useMainScroll = () => {
  return useContext(MainScrollContext);
};
