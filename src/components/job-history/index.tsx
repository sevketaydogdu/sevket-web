import { View, Text } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import { animations } from '@/constants/animations';
import { jobHistory } from '@/constants/job-history';

const JobHistory = () => {
  return (
    <View className="pr-8 mt-20">
      <Animated.Text
        entering={animations.entering.slideInDown}
        // className="mt-10 text-4xl text-center font-extrabold  text-orange-500"
        className="title-h2">
        Experience
      </Animated.Text>

      <View className="space-y-8 mt-8 ">
        {jobHistory.map((job, index) => (
          <Animated.View
            key={job.id}
            entering={animations.entering.slideInRight.delay(index * 100)}
            className="border-l-4 border-orange-500 pl-6 py-2 group hover:border-orange-400">
            <Text className="text-2xl font-bold text-white">{job.position}</Text>
            <Text className="text-xl text-orange-400 mt-1 group-hover:text-orange-300">
              {job.company}
            </Text>
            <Text className="text-white/70 mt-1">{job.period}</Text>
            <Text className="text-white/80 mt-2  text-lg italic ">{job.description}</Text>
          </Animated.View>
        ))}
      </View>
    </View>
  );
};

export default JobHistory;
