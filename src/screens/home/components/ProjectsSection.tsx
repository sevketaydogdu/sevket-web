import ProjectListRenderer from '@/components/project-list/project-list-renderer';
import { Link } from 'expo-router';
import { animations } from '@/constants/animations';
import { Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

export default function ProjectsSection() {
  return (
    <View className="mb-24 md:mb-32">
      <Animated.Text entering={animations.entering.slideInDown} className="title-h2-accent">
        Work
      </Animated.Text>
      <View className="flex flex-row flex-wrap items-end justify-between gap-4 mb-10">
        <Animated.Text entering={animations.entering.slideInDown} className="title-h2 mb-0">
          Featured projects
        </Animated.Text>
        <Link href={'/projects' as any} asChild>
          <Pressable className="group">
            <Text className="text-orange-400 font-medium text-sm group-hover:underline">
              View all →
            </Text>
          </Pressable>
        </Link>
      </View>
      <ProjectListRenderer />
    </View>
  );
}
