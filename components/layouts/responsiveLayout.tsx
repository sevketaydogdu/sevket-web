import React, { FC, ReactNode } from 'react';
import { YStack } from 'tamagui';
interface IResponsiveLayout {
  children: ReactNode;
}
const ResponsiveLayout: FC<IResponsiveLayout> = ({ children }) => {
  return (
    <YStack
      f={1}
      // overflow="hidden"
      $gtLg={{
        mx: `15rem`,
        // px: `2rem`,
      }}
      $gtMd={{
        mx: `5rem`,
        // p: "$2",
        mt: '$2',
      }}
      $gtSm={{ p: '$2', mt: '$2' }}
      $gtXs={{ p: '$2', mt: '$2' }}
      $xs={{ p: '$2', mt: '$2' }}>
      {children}
    </YStack>
  );
};

export default ResponsiveLayout;
