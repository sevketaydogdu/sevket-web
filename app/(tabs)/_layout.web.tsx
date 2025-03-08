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
    <View className="flex-row left-0 right-0 bg-background  justify-center relative">
      {!isMobile && (
        <View
          className={`${
            isCompact ? 'w-[72px]' : ''
          } items-end sticky top-0  border-r border-gray-500 h-screen`}
          style={{ borderRightColor: borderColor }}>
          <View className={`sticky ${isCompact ? 'w-[72px] p-2' : 'w-[275px] p-2'} h-full`}>
            <View className={`fixed ${isCompact ? 'w-[72px] p-2' : 'w-[275px] p-2'} h-full`}>
              <View className="mb-8 pl-3 pt-3">
                {!isCompact && (
                  <View className="flex-row items-center gap-[2px] mt-2">
                    <Image
                      source={require('../../assets/images/logo-white.png')}
                      style={{
                        width: 110,
                        height: 40,
                      }}
                      resizeMode="cover"
                    />
                  </View>
                )}
              </View>

              <View className="">
                <SideBarMenu segments={segments as any} compact={isCompact} />
              </View>

              {!isCompact && (
                <>
                  <Link
                    href="https://twitter.com/intent/follow?screen_name=sevketaydogdu"
                    className="flex-row items-center gap-2 mt-8"
                    target="_blank">
                    <View className="flex-row items-center gap-3 pl-2 relative">
                      <View className="relative">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_210_10)">
                            <path
                              d="M18.5808 0H5.41922C2.42627 0 0 2.4375 0 5.44431V18.5557C0 21.5625 2.42627 24 5.41922 24H18.5808C21.5737 24 24 21.5625 24 18.5557V5.44431C24 2.4375 21.5737 0 18.5808 0Z"
                              fill="black"
                            />
                            <path
                              d="M14.6962 7H16.3894L12.6905 11.2477L17.0419 17.0273H13.6345L10.9659 13.5223L7.91203 17.0273H6.21797L10.1742 12.4843L6 7H9.49359L11.9058 10.2041L14.6962 7ZM14.1019 16.0092H15.0403L8.98406 7.96492H7.97719L14.1019 16.0092Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_210_10">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </View>
                      <Text className="text-sm text-slate-400 font-semibold">
                        Follow Sevket on 𝕏
                      </Text>
                    </View>
                  </Link>
                  <Link
                    href="https://medium.com/@sevketaydogdu34"
                    className="flex-row items-center gap-2 mt-2"
                    target="_blank">
                    <View className="flex-row items-center gap-3 pl-2 relative">
                      <View className="relative">
                        <Image
                          source={{
                            uri: 'https://pbs.twimg.com/profile_images/3544660761/2e8f6be2ebb5d814bd567960a647638b_400x400.png',
                          }}
                          alt="Twitter"
                          className="w-6 h-6 rounded-full"
                        />
                        <View className="w-2 h-2 bg-red-500 rounded-full absolute -top-0.5 -right-0.5" />
                      </View>
                      <Text className="text-sm text-slate-400 font-semibold">
                        Follow Sevket on Medium
                      </Text>
                    </View>
                  </Link>
                </>
              )}
              {/* <View className="mt-8 gap-2">
                {!isCompact && (
                  <Text className="text-sm font-medium text-gray-500 px-3">Discover</Text>
                )}
                <SidebarItem
                  icon="search"
                  label="Following"
                  href="/(tabs)/(search)"
                  compact={isCompact}
                  isActive={segments[1] === 'two'}
                />
              </View> */}

              {/* {searchEntities.sections.map((section) => {
                if (section.id !== 'my_following') return null;
                return (
                  <View
                    key={section.id}
                    className="gap-3 rounded-2xl p-3 mt-4 mr-6"
                    style={{ backgroundColor: '#00000008' }}>
                    {!isCompact && <Text className="text-sm text-gray-500">{section.title}</Text>}
                    <View className="gap-3">
                      {getAllEntitiesForSection(section.id).map((entity: Entity) => (
                        <CategoryCard
                          key={entity.id}
                          title={entity.title}
                          logo={entity.logo}
                          icon={entity.icon}
                          id={entity.id}
                          entity_type={entity.type}
                          minimal={true}
                          disable_name={isCompact}
                        />
                      ))}
                    </View>
                  </View>
                );
              })} */}

              <View className="mr-7 mt-8"> {!isCompact && <SocialButtons showGithub />}</View>
            </View>
          </View>
        </View>
      )}
      <View
        className={`flex-1 w-full max-w-[900px] bg-background h-full p-6 ${isMobile ? 'pb-52' : ''}`}>
        {isMobile && (
          <Link href="/" asChild>
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
                color: segments.length === 1 ? '#fda054' : colorScheme === 'dark' ? '#999' : '#666',
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
                  segments[1] === 'aboutme' ? '#fda054' : colorScheme === 'dark' ? '#999' : '#666',
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
                  segments[1] === 'contact' ? '#fda054' : colorScheme === 'dark' ? '#999' : '#666',
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
                  segments[1] === 'projects' ? '#fda054' : colorScheme === 'dark' ? '#999' : '#666',
              }}>
              Projects
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
