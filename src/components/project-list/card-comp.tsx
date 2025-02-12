import { Link } from 'expo-router';
import { Text, Image, Pressable, View } from 'react-native';
import { IProjectTypes } from '@/types/projectTypes';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';
import Animated from 'react-native-reanimated';
import { animations } from '@/constants/animations';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
export const CardComp = ({ item, index }: { item: IProjectTypes; index: number }) => {
  const { title, subtitle, imagePath } = item;
  const uri = clearSpacesAndSpecialCharacters(title);
  const animationDecider = index % 2 === 0 ? 'slideInLeft' : 'slideInRight';
  return (
    <Link href={`/projects/${uri}`} asChild>
      <AnimatedPressable
        onPress={() => window?.scrollTo({ top: 0, behavior: 'smooth' })}
        entering={animations.entering[animationDecider].delay(index * 50)}
        className="w-full flex-1 overflow-hidden rounded-3xl  bg-background2 pt-2 hover:scale-98">
        <View className="flex-1  p-4 ">
          <Text className="flex-1 color-white text-xl font-bold text-center truncate">{title}</Text>
          <Text
            className="flex-1 color-gray-300 text-md font-normal mt-2 text-center truncate"
            numberOfLines={1}>
            {subtitle}
          </Text>
        </View>
        <View>
          <Image
            source={imagePath as any}
            style={{
              aspectRatio: 1,
              width: '100%',
              height: '100%',
              // flex: 1,
            }}
          />
        </View>
      </AnimatedPressable>
    </Link>
  );
};

// const Subtitle = styled(Text, {
//   fow: '800',
//   col: Colors.dark.gray[100],
//   fontSize: '$4',
// });
// export const CardComp = ({ item }: { item: IProjectTypes }) => {
//   const { title, subtitle, imagePath } = item;
//   const uri = clearSpacesAndSpecialCharacters(title);

//   return (
//     <Card
//       className="w-full flex-1 overflow-hidden rounded-md md:rounded-lg bg-gray-900"
//       onPress={() => router.push(`/projects/${uri}`)}
//       animate={{ opacity: 1, transform: [{ translateY: 0 }] }}
//       from={{ opacity: 0, transform: [{ translateY: 20 }] }}
//       hover={{ scale: 0.97 }}>
//       {/* Header */}
//       <Card.Header className="bg-gray-800 p-5 flex items-center md:items-start space-y-2">
//         <H4 className="text-center md:text-left truncate">{title}</H4>
//         <Subtitle className="mt-2 truncate">{subtitle}</Subtitle>
//       </Card.Header>

//       {/* Footer with Image */}
//       <Card.Footer>
//         <Image source={imagePath as any} className="w-full h-full aspect-square" />
//       </Card.Footer>
//     </Card>
//   );
// };
//   <Card
//     className="w-full flex-1 overflow-hidden rounded-lg md:rounded-lg bg-gray-900"
//     animation="bouncy"
//     hoverStyle={{ scale: 0.97 }}
//     enterStyle={{
//       transitionDelay: '10000ms',
//       opacity: 0,
//       y: +20,
//     }}>
//     <Card.Header
//       // bg={Colors.dark.black[200]}
//       space="$0"
//       ai="center"
//       p="$5"
//       $md={{
//         ai: 'baseline',
//       }}>
//       <H4 ta="center" $md={{ ta: 'left' }} numberOfLines={1}>
//         {title}
//       </H4>
//       <Subtitle mt="$2" numberOfLines={1}>
//         {subtitle}
//       </Subtitle>
//     </Card.Header>
//     <Card.Footer>
//       <Image
//         source={imagePath as any}
//         style={{
//           aspectRatio: 1,
//           width: '100%',
//           height: '100%',
//           // flex: 1,
//         }}
//       />
//     </Card.Footer>
//   </Card>;
