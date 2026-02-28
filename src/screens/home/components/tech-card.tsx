import { useBreakPoints } from '@/hooks/useBreakPoints';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';

const TECHS = [
  'React Native',
  'Expo',
  'TypeScript',
  'Next.js',
  'Vite',
  'Expo Router',
  'Redux',
  'StyleSheet',
  'NativeWind',
  'Tamagui',
];

function Chip({ label }: { label: string }) {
  return (
    <LinearGradient
      colors={['#ffffff20', '#ffffff05']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="rounded-xl"
      style={{ padding: 1 }}>
      <View
        className="rounded-xl bg-white/5 px-3 py-1"
        style={{ borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' }}>
        <Text className="text-white/90 text-xs font-medium">{label}</Text>
      </View>
    </LinearGradient>
  );
}

export function TechStackCard() {
  const { isMobile } = useBreakPoints();

  return (
    <LinearGradient
      colors={['#1b1b1b', '#000']}
      className={`rounded-3xl flex-1 ${isMobile ? 'flex-col p-12' : 'flex-row p-6'} items-center overflow-hidden`}>
      <LinearGradient
        colors={['#FFD978', '#FFB84D', '#FF8A00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="h-2 w-full absolute top-0 left-0"
      />
      <View className="flex-shrink ">
        <Text className="text-white text-xl font-semibold ">Core technologies</Text>
        <Text className="text-white/70 text-sm mt-1">Modern, fast, typed, production-ready.</Text>

        <View className="flex-row flex-wrap gap-2 mt-4">
          {TECHS.map((t) => (
            <Chip key={t} label={t} />
          ))}
        </View>
      </View>
    </LinearGradient>
  );
}

//  <View
//    className="rounded-3xl overflow-hidden"
//    style={{ backgroundColor: '#111214', borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)' }}>
//    {/* Accent ribbon */}
//  <LinearGradient
//    colors={['#FFD978', '#FFB84D', '#FF8A00']}
//    start={{ x: 0, y: 0 }}
//    end={{ x: 1, y: 0 }}
//    className="h-2 w-full"
//  />

//    <View className="p-6">
//      <Text className="text-white text-xl font-semibold ">Core technologies</Text>
//      <Text className="text-white/70 text-sm mt-1">Modern, fast, typed, production-ready.</Text>

//      <View className="flex-row flex-wrap gap-2 mt-4">
//        {TECHS.map((t) => (
//          <Chip key={t} label={t} />
//        ))}
//      </View>
//    </View>
//  </View>;
