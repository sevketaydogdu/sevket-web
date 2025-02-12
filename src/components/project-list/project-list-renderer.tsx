import React, { useMemo } from 'react';

import { CardComp } from './card-comp';

import { projects } from '@/constants/projects';
import { useWindowDimensions, View } from 'react-native';
import Animated from 'react-native-reanimated';

const ProjectListRenderer = () => {
  const { width: screenWidth } = useWindowDimensions();

  const cardRowForResponsive = useMemo(() => (screenWidth > 960 ? 2 : 2), [screenWidth]);
  const numRows = Math.ceil(projects.length / cardRowForResponsive);

  return (
    <View className="flex-1">
      {Array.from({ length: numRows }).map((row, rowIndex) => (
        <View key={rowIndex}>
          <View className="flex-row gap-4 flex-1">
            {/* Slice the projects array for the current row */}
            {projects
              .slice(rowIndex * cardRowForResponsive, (rowIndex + 1) * cardRowForResponsive)
              .map((item, index) => (
                <CardComp
                  key={item.id.toString() + rowIndex.toString() + '3'}
                  item={item}
                  index={index}
                />
              ))}
          </View>
          {rowIndex < 2 - 1 && <View className="h-[16px]" />}
        </View>
      ))}
    </View>
  );
};
export default ProjectListRenderer;
