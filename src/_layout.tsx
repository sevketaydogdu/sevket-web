import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Slot, Tabs, useSegments } from 'expo-router';
import { Image, Platform, Pressable, Text, useColorScheme, View } from 'react-native';

import Colors from './constants/Colors';
import { useBreakPoints } from '@/hooks/useBreakPoints';
import SideBarMenu from '@/components/web/sidebar-menu';
import SocialButtons from '@/components/SocialButtons';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isMobile, isCompact } = useBreakPoints();
  const segments = useSegments();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="projects/index"
        options={{
          title: 'projects',
          tabBarIcon: ({ color }) => <TabBarIcon name="wpexplorer" color={color} />,
        }}
      />
    </Tabs>
  );
}
