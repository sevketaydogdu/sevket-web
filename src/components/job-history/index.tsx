import { animations } from '@/constants/animations';
import { jobHistory } from '@/constants/job-history';
import React from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

const JobHistory = () => {
  return (
    <View>
      <Animated.Text entering={animations.entering.slideInDown} className="title-h2-accent">
        Career
      </Animated.Text>
      <Animated.Text entering={animations.entering.slideInDown} className="title-h2 mb-10">
        Experience
      </Animated.Text>

      <View className="relative">
        {/* Vertical line */}
        <View className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />

        <View className="space-y-1">
          {jobHistory.map((job, index) => (
            <Animated.View
              key={`${job.company}-${job.period}`}
              className="flex-row gap-5 pl-1 group">
              {/* Dot */}
              <View className="relative z-10 mt-3.5 w-4 h-4 rounded-full border-2 border-orange-500 bg-background flex-shrink-0 group-hover:border-orange-400" />

              <View className="flex-1 pb-12 border-b border-white/5 last:border-0">
                <Text className="text-lg font-bold text-white">{job.position}</Text>
                <Text className="text-orange-400 font-medium mt-0.5">{job.company}</Text>
                <Text className="text-white/50 text-sm mt-1">{job.period}</Text>
                <Text className="text-white/75 text-base leading-relaxed mt-3">
                  {job.description}
                </Text>
              </View>
            </Animated.View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default JobHistory;
