import { Link } from 'expo-router';
import Head from 'expo-router/head';
import React from 'react';
import { Pressable, useWindowDimensions } from 'react-native';
import { H2, Text, View, XStack } from 'tamagui';

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
    <View
      f={1}
      enterStyle={{
        opacity: 0,
        y: 10,
      }}
      animation="lazy">
      <Head>
        <title>Sevket Aydogdu - React Native Developer</title>
      </Head>
      {/* Top section */}
      <View h={height * 0.5} mih={500} br="$6" jc="center">
        <>
          <Title
            col="white"
            fos="$13"
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
              col={Colors.dark.orange[100]}
              fos="$13"
              fow="900"
              $xs={{
                fos: '$9',
                lh: '$9',
              }}>
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
