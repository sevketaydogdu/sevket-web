import { Link } from 'expo-router';
import { Image, Pressable, View } from 'react-native';

export default function MobileHeader() {
  return (
    <Link href="/" asChild>
      <Pressable className="flex-initial top-0 left-0 right-0 z-10">
        <View className="flex-row bg-background2 mb-4 justify-center items-center gap-[2px] py-4 rounded-lg">
          <Image
            source={require('../../../../assets/images/logo-white.png')}
            style={{
              width: 110,
              height: 40,
            }}
            resizeMode="cover"
          />
        </View>
      </Pressable>
    </Link>
  );
}

