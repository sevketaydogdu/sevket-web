import { Link } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { Text, Pressable, useWindowDimensions } from 'react-native';
import { H2, View, XStack } from 'tamagui';

import { Title } from '../../../tamagui.config';

import { Button } from '@/components/buttons/styledButton';
import ProjectListRenderer from '@/components/project-list/project-list-renderer';
import Colors from '@/constants/Colors';

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
      <View
        className={`h-[${height * 500}px] py-32 min-h-[500px] bg-background2 rounded-3xl  justify-center`}>
        <>
          <Title
            col="white"
            fos="$12"
            $xs={{
              fos: '$9',
              lh: '$9',
            }}
            ta="center"
            enterStyle={{
              opacity: 0,
              scale: 1.5,
              y: 128,
            }}
            animation="lazy">
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
          </Title>
          <XStack
            mt="$6"
            space="$2"
            als="center"
            $xs={{
              fd: 'column',
              gap: '$1',
            }}
            enterStyle={{
              opacity: 0,
              scale: 1.5,
              y: 128,
            }}
            animation="lazy">
            <Link href="/contact/" asChild>
              <Pressable>
                <Button
                  white
                  // onPress={() => router.push()}
                  textAlign="center">
                  Get In Touch
                </Button>
              </Pressable>
            </Link>
            <Link href="/projects/" asChild>
              <Pressable>
                <Button
                  outlined
                  //  onPress={() => router.push()}
                >
                  View All Projects
                </Button>
              </Pressable>
            </Link>
          </XStack>
        </>
      </View>
      <H2 mt="$10" mb="$8" als="center" col={Colors.dark.orange[100]}>
        Projects
      </H2>
      <ProjectListRenderer />
    </View>
  );
}
