import { Feather } from '@expo/vector-icons';
import { router, useSegments } from 'expo-router';
import { Platform, Pressable, Text, useColorScheme, View } from 'react-native';

export default function MobileBottomNav() {
  const colorScheme = useColorScheme();
  const segments = useSegments();
  const borderColor = '#2f3336';

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

  const activeColor = '#fda054';
  const inactiveColor = colorScheme === 'dark' ? '#999' : '#666';

  return (
    <View
      className={`fixed bottom-0 left-0 right-0 h-16 flex-row border-t ${
        Platform.OS === 'ios' ? 'pb-5' : ''
      }`}
      style={{
        borderTopColor: borderColor,
        backgroundColor:
          colorScheme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: Platform.OS === 'web' ? 'blur(12px)' : undefined,
      }}>
      {navItems.map((item) => (
        <Pressable
          key={item.route}
          onPress={() => router.push(item.route as any)}
          className="flex-1 items-center justify-center gap-1">
          <Feather
            name={item.icon}
            size={24}
            color={item.isActive ? activeColor : inactiveColor}
          />
          <Text
            className="text-xs font-medium"
            style={{
              color: item.isActive ? activeColor : inactiveColor,
            }}>
            {item.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

