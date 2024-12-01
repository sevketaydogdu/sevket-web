import { Link } from 'expo-router';
import { Image, Pressable } from 'react-native';
import { Card, H4, styled, Text } from 'tamagui';

import Colors from '@/constants/Colors';
import { IProjectTypes } from '@/types/projectTypes';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';

export const CardComp = ({ item }: { item: IProjectTypes }) => {
  const { title, subtitle, imagePath } = item;
  const uri = clearSpacesAndSpecialCharacters(title);

  return (
    <Link href={`/projects/${uri}`} asChild>
      <Pressable style={{ flex: 1 }}>
        <Card
          cursor="pointer"
          f={1}
          ov="hidden"
          br="$1"
          w="100%"
          $md={{ br: '$2' }}
          animation="bouncy"
          bg={Colors.dark.black[300]}
          hoverStyle={{ scale: 0.97 }}
          enterStyle={{
            transitionDelay: '10000ms',
            opacity: 0,
            y: +20,
          }}>
          <Card.Header
            bg={Colors.dark.black[200]}
            space="$0"
            ai="center"
            p="$5"
            $md={{
              ai: 'baseline',
            }}>
            <H4 ta="center" $md={{ ta: 'left' }} numberOfLines={1}>
              {title}
            </H4>
            <Subtitle mt="$2" numberOfLines={1}>
              {subtitle}
            </Subtitle>
          </Card.Header>
          <Card.Footer>
            <Image
              source={imagePath as any}
              style={{
                aspectRatio: 1,
                width: '100%',
                height: '100%',
                // flex: 1,
              }}
            />
          </Card.Footer>
        </Card>
      </Pressable>
    </Link>
  );
};
const Subtitle = styled(Text, {
  fow: '800',
  col: Colors.dark.gray[100],
  fontSize: '$4',
});
