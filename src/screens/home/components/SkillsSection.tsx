import { SkillBar } from '@/components/skill-bar';
import { animations } from '@/constants/animations';
import { skills } from '@/constants/skills';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

const categories = [
  { key: 'mobile', label: 'Mobile' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'design', label: 'Design' },
  { key: 'tools', label: 'Tools' },
] as const;

export default function SkillsSection() {
  return (
    <View className="mb-24 md:mb-32">
      <Animated.Text entering={animations.entering.slideInDown} className="title-h2-accent">
        Skills & Expertise
      </Animated.Text>
      <Animated.Text entering={animations.entering.slideInDown} className="title-h2 mb-10">
        What I work with
      </Animated.Text>

      <View className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {categories.map((cat) => {
          const categorySkills = skills.filter((s) => s.category === cat.key);
          if (categorySkills.length === 0) return null;
          return (
            <Animated.View
              key={cat.key}
              entering={animations.entering.fade.delay(100)}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <Text className="text-orange-400/90 text-sm font-semibold uppercase tracking-wider mb-6">
                {cat.label}
              </Text>
              <View className="space-y-6">
                {categorySkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </View>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}
