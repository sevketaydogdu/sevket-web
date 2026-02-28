import ProjectListRenderer from '@/components/project-list/project-list-renderer';
import { animations } from '@/constants/animations';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

export default function ProjectsSection() {
  return (
    <View className="   px-4 py-20">
      <Animated.Text
        entering={animations.entering.slideInDown}
        className="title-h2 animate-title mb-8">
        Featured Projects
      </Animated.Text>
      <ProjectListRenderer />
    </View>
  );
}
