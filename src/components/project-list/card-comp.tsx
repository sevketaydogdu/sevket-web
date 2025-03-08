import { Link } from 'expo-router';
import { Text, Image, Pressable, View } from 'react-native';
import { IProjectTypes } from '@/types/projectTypes';
import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';
import Animated, {
  FadeIn,
  useAnimatedStyle,
  withSpring,
  useSharedValue,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const CardComp = ({ item, index }: { item: IProjectTypes; index: number }) => {
  const { title, subtitle, imagePath } = item;
  const uri = clearSpacesAndSpecialCharacters(title);
  const scale = useSharedValue(1);

  return (
    <Link href={`/projects/${uri}`} asChild>
      <AnimatedPressable
        entering={FadeIn.delay(index * 150)}
        className="group relative flex-1 overflow-hidden rounded-3xl bg-background2">
        {/* Image Container with larger aspect ratio */}
        <View className="relative aspect-[1] w-full overflow-hidden">
          <View>
            <Image
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              source={imagePath as any}
              style={{
                aspectRatio: 1,
                width: '100%',
                height: '100%',
                // flex: 1,
              }}
            />
          </View>
          <View className="absolute inset-0 bg-gradient-to-t from-background2 via-background2/50 to-transparent" />
        </View>

        <View className="relative p-6 space-y-4">
          <View className="space-y-2">
            <Text className="text-2xl font-bold text-white/90 group-hover:text-orange-400 transition-colors duration-300">
              {title}
            </Text>
            <View className="h-0.5 w-16 bg-orange-500/50 group-hover:w-24 transition-all duration-500 ease-out" />
          </View>

          <Text className="text-base text-white/70 leading-relaxed" numberOfLines={2}>
            {subtitle}
          </Text>
        </View>

        {/* Hover Effects */}
        <View className="absolute inset-0">
          {/* Top highlight */}
          <View className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Bottom highlight */}
          <View className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </View>
      </AnimatedPressable>
    </Link>
  );
};

// import { Link } from 'expo-router';
// import { Text, Image, Pressable, View } from 'react-native';
// import { IProjectTypes } from '@/types/projectTypes';
// import { clearSpacesAndSpecialCharacters } from '@/utils/dekete-special-characters';
// import Animated from 'react-native-reanimated';
// import { animations } from '@/constants/animations';

// const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
// export const CardComp = ({ item, index }: { item: IProjectTypes; index: number }) => {
//   const { title, subtitle, imagePath } = item;
//   const uri = clearSpacesAndSpecialCharacters(title);
//   const animationDecider = index % 2 === 0 ? 'slideInLeft' : 'slideInRight';
//   return (
//     <Link href={`/projects/${uri}`} asChild>
//       <AnimatedPressable
//         onPress={() => window?.scrollTo({ top: 0, behavior: 'smooth' })}
//         entering={animations.entering[animationDecider].delay(index * 50)}
//         className="w-full flex-1 overflow-hidden rounded-3xl  bg-background2 pt-2 hover:scale-98">
//         <View className="flex-1  p-4 ">
//           <Text className="flex-1 color-white text-xl font-bold text-center truncate">{title}</Text>
//           <Text
//             className="flex-1 color-gray-300 text-md font-normal mt-2 text-center truncate"
//             numberOfLines={1}>
//             {subtitle}
//           </Text>
//         </View>
//         <View>
//           <Image
//             source={imagePath as any}
//             style={{
//               aspectRatio: 1,
//               width: '100%',
//               height: '100%',
//               // flex: 1,
//             }}
//           />
//         </View>
//       </AnimatedPressable>
//     </Link>
//   );
// };
