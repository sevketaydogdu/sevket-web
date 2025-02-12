import { Link } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { Text, Pressable, useWindowDimensions, View } from 'react-native';

import ProjectListRenderer from '@/components/project-list/project-list-renderer';
import Animated from 'react-native-reanimated';
import { animations } from '@/constants/animations';
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
export default function WebHomeScreen() {
  const { height } = useWindowDimensions();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <View className="flex-1  ">
      <Head>
        <title>Sevket Aydogdu - React Native Developer</title>
      </Head>

      {/* Top section */}
      <Animated.View
        entering={animations.entering.fade}
        className={`h-[${height * 500}px] py-32 min-h-[500px] bg-background2 rounded-3xl  justify-center`}>
        <>
          <Animated.Text
            entering={animations.entering.slideInDown}
            className="text-white text-5xl font-bold text-center   "
            // col="white"
            // fos="$12"
            // $xs={{
            //   fos: '$9',
            //   lh: '$9',
            // }}
            // ta="center"
            // enterStyle={{
            //   opacity: 0,
            //   scale: 1.5,
            //   y: 128,
            // }}
            // animation="lazy"
          >
            <Text
              className="font-bold  color-orange-400"

              // fos="$13"
              // fow="900"
              // $xs={{
              //   fos: '$9',
              //   lh: '$9',
              // }}
            >
              Hello, I am Sevket,
            </Text>
            <br />
            react-native developer
            <br />
            based in Turkey.
          </Animated.Text>
          <View
            className="mt-8 flex-row gap-4 self-center sm:gap-4"

            // enterStyle={{
            //   opacity: 0,
            //   scale: 1.5,
            //   y: 128,
            // }}
            // animation="lazy"
          >
            <Link href="/contact/" asChild>
              <AnimatedPressable entering={animations.entering.slideInLeft} className={'group'}>
                <View
                  className="group-hover:bg-orange-950 bg-background rounded-2xl flex-row gap-2 items-center justify-center px-4 py-2"
                  // onPress={() => router.push()}
                >
                  <Text className="text-white group-hover:text-orange-300">Get In Touch</Text>
                </View>
              </AnimatedPressable>
            </Link>
            <Link href="/projects/" asChild>
              <AnimatedPressable entering={animations.entering.slideInRight} className={'group'}>
                <View
                  className="group-hover:bg-orange-950 bg-background rounded-2xl flex-row gap-2 items-center justify-center px-4 py-2"
                  // onPress={() => router.push()}
                >
                  <Text className="text-white group-hover:text-orange-300">View All Projects</Text>
                </View>
              </AnimatedPressable>
            </Link>
          </View>
        </>
      </Animated.View>
      <Animated.Text
        entering={animations.entering.slideInDown}
        className="mt-10 text-4xl font-extrabold mb-8 self-center color-orange-500">
        Projects
      </Animated.Text>
      <ProjectListRenderer />
    </View>
  );
}
