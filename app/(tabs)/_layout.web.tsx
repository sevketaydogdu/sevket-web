import { Slot } from 'expo-router';
import { View } from 'react-native';

import { SiteFooter, SiteHeader } from '@/components/site';

/**
 * Web shell: a single-line text header, the page, and a shared footer.
 * (The previous sidebar/drawer navigation lives on in components/design-v2 but is no longer used here.)
 */
export default function TabLayout() {
  return (
    <View className="min-h-screen flex-1 bg-background" data-scroll-root="main">
      <SiteHeader />
      <View className="w-full flex-1 safe-area-bottom">
        <Slot />
      </View>
      <SiteFooter />
    </View>
  );
}
