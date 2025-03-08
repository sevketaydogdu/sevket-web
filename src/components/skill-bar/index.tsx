import { View, Text } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import type { Skill } from '@/constants/skills';

export const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <Animated.View entering={FadeIn.delay(index * 100)} className="space-y-2  ">
      <View className="flex-row justify-between items-center">
        <Text className="text-white/90 font-medium">{skill.name}</Text>
        <Text className="text-orange-400">{skill.level}%</Text>
      </View>
      <View className="h-2 bg-background2 rounded-full overflow-hidden">
        <View
          className="h-full bg-orange-400/50 rounded-full"
          style={{ width: `${skill.level}%` }}
        />
      </View>
    </Animated.View>
  );
};
