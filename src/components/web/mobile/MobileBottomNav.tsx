import { useTheme } from '@/contexts/ThemeContext';
import { Feather } from '@expo/vector-icons';
import { router, useSegments } from 'expo-router';
import { Platform, Pressable, Text, View } from 'react-native';

const ACTIVE_TINT = '#f97316';
const INACTIVE_LIGHT = '#525252';
const INACTIVE_DARK = '#a3a3a3';

export default function MobileBottomNav() {
  const { colorScheme } = useTheme();
  const segments = useSegments();
  const inactiveColor = colorScheme === 'dark' ? INACTIVE_DARK : INACTIVE_LIGHT;

  const navItems = [
    { icon: 'home' as const, label: 'Home', route: '/', isActive: segments.length === 1 },
    {
      icon: 'info' as const,
      label: 'About',
      route: '/aboutme',
      isActive: segments[1] === 'aboutme',
    },
    {
      icon: 'mail' as const,
      label: 'Contact',
      route: '/contact',
      isActive: segments[1] === 'contact',
    },
    {
      icon: 'feather' as const,
      label: 'Projects',
      route: '/projects',
      isActive: segments[1] === 'projects',
    },
  ];

  return (
    <View
      className={`fixed bottom-0 left-0 right-0 h-16 flex-row border-t border-border bg-card/90 backdrop-blur-xl ${
        Platform.OS === 'ios' ? 'pb-5' : ''
      }`}>
      {navItems.map((item) => (
        <Pressable
          key={item.route}
          onPress={() => {
            router.push(item.route as any);
            if (Platform.OS === 'web' && typeof window !== 'undefined') {
              setTimeout(() => {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              }, 100);
            }
          }}
          className="flex-1 items-center justify-center gap-1">
          <Feather
            name={item.icon}
            size={24}
            color={item.isActive ? ACTIVE_TINT : inactiveColor}
          />
          <Text
            className={`text-xs font-medium ${item.isActive ? 'text-orange-500' : 'text-muted'}`}
            style={item.isActive ? undefined : { color: inactiveColor }}>
            {item.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

