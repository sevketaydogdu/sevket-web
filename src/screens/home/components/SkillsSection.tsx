import { SkillBar } from '@/components/skill-bar';
import { animations } from '@/constants/animations';
import { skills } from '@/constants/skills';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

export default function SkillsSection() {
  return (
    <View className="px-4 py-20">
      <Animated.Text entering={animations.entering.slideInDown} className="title-h2 mb-8">
        Skills & Expertise
      </Animated.Text>

      <View className="grid grid-cols-2 gap-8">
        <View className="space-y-6">
          {skills
            .filter((skill) => ['mobile', 'frontend'].includes(skill.category))
            .map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
        </View>

        <View className="space-y-6">
          {skills
            .filter((skill) => ['design', 'tools'].includes(skill.category))
            .map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
        </View>
      </View>
    </View>
  );
}
