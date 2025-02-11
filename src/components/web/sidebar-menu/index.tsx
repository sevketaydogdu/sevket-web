import { Feather } from '@expo/vector-icons';
import { Route, useRouter } from 'expo-router';
import { useColorScheme, Pressable, Text, View } from 'react-native';

const SIDEBAR_DATA = ({ segments, isCompact }: { segments: Route; isCompact: boolean }) => [
  {
    icon: 'home',
    label: 'Home',
    href: '/',
    compact: isCompact,
    isActive: segments.length === 1,
  },
  {
    icon: 'about',
    label: 'About',
    href: '/aboutme',
    compact: isCompact,
    isActive: segments[1] === 'aboutme',
  },
  {
    icon: 'contact',
    label: 'Contact',
    href: '/contact',
    compact: isCompact,
    isActive: segments[1] === 'contact',
  },
  {
    icon: 'projects',
    label: 'Projects',
    href: '/projects',
    compact: isCompact,
    isActive: segments[1] === 'projects',
  },
];
const SideBarMenu = ({ segments, compact }: { segments: Route; compact: boolean }) => {
  return (
    <View className="">
      {SIDEBAR_DATA({ segments, isCompact: compact }).map((item, index) => (
        <SidebarItem
          key={index}
          icon={item.icon as any}
          href={item.href}
          label={item.label}
          isActive={item.isActive}
          compact={item.compact}
        />
      ))}
    </View>
  );
};
export default SideBarMenu;
function SidebarItem({
  icon,
  label,
  href,
  isActive,
  compact = false,
}: {
  icon: keyof typeof Feather.glyphMap | 'home' | 'about' | 'contact' | 'projects';
  label: string;
  href: string;
  isActive?: boolean;
  compact?: boolean;
}) {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const hoverBg = colorScheme === 'dark' ? 'rgba(255, 59, 48, 0.1)' : 'rgba(255, 59, 48, 0.1)';
  const activeBg = colorScheme === 'dark' ? 'rgba(255, 59, 48, 0.15)' : 'rgba(255, 59, 48, 0.15)';
  const textColor = isActive ? '#fda054' : '#ffffff';

  const iconColor = isActive ? '#fda054' : '#ffffff';

  const size = compact ? 22 : 22;

  const getIcon = () => {
    switch (icon) {
      case 'home':
        return <Feather name="home" size={size} color={iconColor} />;
      case 'about':
        return <Feather name="book-open" size={size} color={iconColor} />;
      case 'contact':
        return <Feather name="mail" size={size} color={iconColor} />;
      case 'projects':
        return <Feather name="printer" size={size} color={iconColor} />;

      default:
        return <Feather name="airplay" size={size} color={iconColor} />;
    }
  };

  return (
    <Pressable
      onPress={() => {
        window?.scrollTo({ top: 0, behavior: 'smooth' });

        router.push(href as any);
      }}
      className={` flex flex-row items-center p-2 rounded-lg gap-3 mb-0.5 
        hover:bg-selected transition-all duration-200  ${
          compact ? 'justify-center w-10 h-10 mx-auto' : 'pl-2 pr-6 mr-8'
        } ${isActive ? 'bg-background2' : ''}`}
      style={({ pressed, hovered }) => [(pressed || hovered) && { backgroundColor: hoverBg }]}>
      {getIcon()}
      {!compact && (
        <Text
          className={`text-[15px] font-semibold ${isActive ? 'font-bold ' : ''}`}
          style={{ color: textColor }}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}
