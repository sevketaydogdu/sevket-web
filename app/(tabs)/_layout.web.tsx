import { Slot, useSegments } from 'expo-router';
import { View } from 'react-native';

import MobileBottomNav from '@/components/web/mobile/MobileBottomNav';
import MobileHeader from '@/components/web/mobile/MobileHeader';
import SidebarContainer from '@/components/web/sidebar/SidebarContainer';
import { useBreakPoints } from '@/hooks/useBreakPoints';

export default function TabLayout() {
  const segments = useSegments();
  const { isCompact, isMobile } = useBreakPoints();

  const borderColor = '#2f3336';

  return (
    <View className="flex-row left-0 right-0 bg-background justify-center relative">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <View
          className={`${
            isCompact ? 'w-[72px]' : ''
          } items-end sticky top-0 border-r border-gray-500 h-screen`}
          style={{ borderRightColor: borderColor }}>
          <SidebarContainer segments={segments as any} isCompact={isCompact} />
        </View>
      )}

      {/* Main Content Area */}
      <View
        className={`flex-1 w-full max-w-[1200px] bg-background h-full p-6 ${
          isMobile ? 'pb-52' : ''
        }`}>
        {isMobile && <MobileHeader />}
        <Slot />
      </View>

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav />}
    </View>
  );
}
