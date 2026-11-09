import SocialButtons from '@/components/SocialButtons';
import { View } from 'react-native';

interface SidebarFooterProps {
  isCompact: boolean;
}

export default function SidebarFooter({ isCompact }: SidebarFooterProps) {
  if (isCompact) return null;

  return (
    <View className="mr-7 mt-8">
      <SocialButtons showGithub />
    </View>
  );
}

