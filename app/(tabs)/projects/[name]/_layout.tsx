import { View, Text, Image, Pressable } from 'react-native';
import React, { useCallback } from 'react';
import { Link, router, Slot, useSegments } from 'expo-router';
import SocialButtons from '@/components/SocialButtons';
import SideBarMenu from '@/components/web/sidebar-menu';
import { useBreakPoints } from '@/hooks/useBreakPoints';
import { Feather } from '@expo/vector-icons';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

const ProjectsLayout = () => {
  const { isCompact, isMobile } = useBreakPoints();

  const handlePressBack = useCallback(() => {
    if (router.canGoBack()) {
      console.log('🚀 ~ handlePressBack ~ router.canGoBack(:', router.canGoBack());
      router.back();
    } else {
      router.push('/');
    }
  }, []);
  return (
    <>
      {!isMobile && (
        <Pressable
          onPress={handlePressBack}
          className="self-start hover:scale-98  absolute   left-6 z-50">
          <View className="flex-row gap-4 px-4 py-3 items-center self-start hover:scale-98 bg-background2 rounded-xl hover:bg-selected ">
            <Feather name="arrow-left" size={24} color="white" />
            <Text className="text-white">Back</Text>
          </View>
        </Pressable>
      )}
      <Slot />
    </>
  );
};

export default ProjectsLayout;
