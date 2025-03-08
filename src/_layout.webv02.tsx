import { Feather } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, router, Slot, Stack, useRouter, useSegments } from 'expo-router';
import {
  Image,
  Platform,
  Pressable,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import SocialButtons from '@/components/SocialButtons';
import SideBarMenu from '@/components/web/sidebar-menu';
import { useBreakPoints } from '@/hooks/useBreakPoints';

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
  const segments = useSegments();
  const { isCompact, isMobile } = useBreakPoints();

  const { width } = useWindowDimensions();

  const borderColor = colorScheme === 'dark' ? '#2f3336' : '#eee';

  return (
    <>
      {/* header start */}
      <View
        className="flex-row left-0 right-0 bg-background justify-center fixed top-0 z-50"
        style={{
          backdropFilter: Platform.OS === 'web' ? 'blur(12px)' : undefined,
          backgroundColor:
            colorScheme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        }}>
        <View className="flex-1 w-full max-w-[900px] p-6 flex-row justify-between items-center">
          <View className="flex-row gap-4 items-center">
            <Link href={'/' as any} asChild>
              <Pressable className="flex-initial top-0 left-0 right-0 z-10">
                <Image
                  source={require('../../assets/images/logo-white.png')}
                  style={{
                    width: 110,
                    height: 40,
                  }}
                  resizeMode="cover"
                />
              </Pressable>
            </Link>
          </View>
          <SideBarMenu segments={segments as any} compact={isCompact} />
        </View>
      </View>
      {/* header end */}
      <View className="flex-row left-0 right-0 bg-background justify-center relative mt-[72px]">
        <View
          className={`flex-1 w-full max-w-[900px] bg-background h-full p-6 ${isMobile ? 'pb-52' : ''}`}>
          {isMobile && (
            <Link href={'/' as any} asChild>
              <Pressable className="flex-initial top-0 left-0 right-0 z-10">
                <View className="flex-row  bg-background2 mb-4 justify-center items-center gap-[2px] py-4 rounded-lg">
                  <Image
                    source={require('../../assets/images/logo-white.png')}
                    style={{
                      width: 110,
                      height: 40,
                    }}
                    resizeMode="cover"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          <Slot />
        </View>
        {isMobile && (
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
            <Pressable
              onPress={() => router.push('/')}
              className="flex-1 items-center justify-center gap-1">
              <Feather
                name="home"
                size={24}
                color={segments.length === 1 ? '#fda054' : colorScheme === 'dark' ? '#999' : '#666'}
              />
              <Text
                className="text-xs font-medium"
                style={{
                  color:
                    segments.length === 1 ? '#fda054' : colorScheme === 'dark' ? '#999' : '#666',
                }}>
                Home
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push('/aboutme')}
              className="flex-1 items-center justify-center gap-1">
              <Feather
                name="book-open"
                size={24}
                color={
                  segments[1] === 'aboutme' ? '#fda054' : colorScheme === 'dark' ? '#999' : '#666'
                }
              />
              <Text
                className="text-xs font-medium"
                style={{
                  color:
                    segments[1] === 'aboutme'
                      ? '#fda054'
                      : colorScheme === 'dark'
                        ? '#999'
                        : '#666',
                }}>
                About
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push('/contact')}
              className="flex-1 items-center justify-center gap-1">
              <Feather
                name="mail"
                size={24}
                color={
                  segments[1] === 'contact' ? '#fda054' : colorScheme === 'dark' ? '#999' : '#666'
                }
              />
              <Text
                className="text-xs font-medium"
                style={{
                  color:
                    segments[1] === 'contact'
                      ? '#fda054'
                      : colorScheme === 'dark'
                        ? '#999'
                        : '#666',
                }}>
                Contact
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push('/projects')}
              className="flex-1 items-center justify-center gap-1">
              <Feather
                name="printer"
                size={24}
                color={
                  segments[1] === 'projects' ? '#fda054' : colorScheme === 'dark' ? '#999' : '#666'
                }
              />
              <Text
                className="text-xs font-medium"
                style={{
                  color:
                    segments[1] === 'projects'
                      ? '#fda054'
                      : colorScheme === 'dark'
                        ? '#999'
                        : '#666',
                }}>
                Projects
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </>
  );
}
