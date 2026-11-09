import SideBarMenu from '@/components/web/sidebar-menu';
import { Route } from 'expo-router';
import { View } from 'react-native';
import SidebarFooter from './SidebarFooter';
import SidebarLogo from './SidebarLogo';
import SidebarSocialLinks from './SidebarSocialLinks';

interface SidebarContainerProps {
  segments: Route;
  isCompact: boolean;
}

export default function SidebarContainer({ segments, isCompact }: SidebarContainerProps) {
  return (
    <View className={`sticky ${isCompact ? 'w-[72px] p-2' : 'w-[275px] p-2'} h-full`}>
      <View className={`fixed ${isCompact ? 'w-[72px] p-2' : 'w-[275px] p-2'} h-full`}>
        <SidebarLogo isCompact={isCompact} />

        <View className="">
          <SideBarMenu segments={segments as any} compact={isCompact} />
        </View>

        {!isCompact && (
          <>
            <SidebarSocialLinks isCompact={isCompact} />
            <SidebarFooter isCompact={isCompact} />
          </>
        )}
      </View>
    </View>
  );
}

