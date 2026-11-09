import { Image, View } from 'react-native';

interface SidebarLogoProps {
  isCompact: boolean;
}

export default function SidebarLogo({ isCompact }: SidebarLogoProps) {
  if (isCompact) return null;

  return (
    <View className="mb-8 pl-3 pt-3">
      <View className="flex-row items-center gap-[2px] mt-2">
        <Image
          source={require('../../../../assets/images/logo-white.png')}
          style={{
            width: 110,
            height: 40,
          }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

