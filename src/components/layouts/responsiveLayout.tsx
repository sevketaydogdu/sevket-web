import React, { FC, ReactNode } from 'react';
import { ScrollView, YStack } from 'tamagui';
interface IResponsiveLayout {
  children: ReactNode;
}
const ResponsiveLayout: FC<IResponsiveLayout> = ({ children }) => {
  return (
    <ScrollView
      f={1}
      jc="space-between"
      fd="column"
      bg="rebeccapurple"
      // f={1}
      // overflow="hidden"
      // bg="$red10"
      $gtLg={{
        // mx: `15rem`,
        maw: 1200,
        mx: 'auto',

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
    </ScrollView>
  );
};

export default ResponsiveLayout;
