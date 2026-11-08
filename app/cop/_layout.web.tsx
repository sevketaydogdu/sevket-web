import { Slot, useSegments } from 'expo-router';
import { View } from 'react-native';

import NavbarV2 from '@/components/design-v2/NavbarV2';
import MobileBottomNav from '@/components/web/mobile/MobileBottomNav';
import MobileHeader from '@/components/web/mobile/MobileHeader';
import SidebarContainer from '@/components/web/sidebar/SidebarContainer';
import { useBreakPoints } from '@/hooks/useBreakPoints';

/** Set to true to use design v2 top navbar instead of sidebar (desktop) / mobile header (mobile). */
const USE_DESIGN_V2_NAVBAR = true;

export default function TabLayout() {
  const segments = useSegments();
  const { isCompact, isMobile } = useBreakPoints();

  const borderColor = '#2f3336';

  return (
    <View className="flex-1 ">
      {/* Design v2: single top navbar for all breakpoints */}
      {/* {USE_DESIGN_V2_NAVBAR && <NavbarV2 />} */}

      <View className="flex-row flex-1 left-0 right-0 justify-center relative">
        {/* Desktop Sidebar — hidden when using design v2 navbar */}
        {!isMobile && !USE_DESIGN_V2_NAVBAR && (
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
          className={`flex-1 w-full max-w-[1200px]  h-full p-6 ${
            isMobile && !USE_DESIGN_V2_NAVBAR ? 'pb-52' : ''
          }`}>
          {isMobile && !USE_DESIGN_V2_NAVBAR && <MobileHeader />}
          <Slot />
        </View>

        {/* Mobile Bottom Navigation — hidden when using design v2 navbar */}
        {isMobile && !USE_DESIGN_V2_NAVBAR && <MobileBottomNav />}
      </View>
    </View>
  );
}
