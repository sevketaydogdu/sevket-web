import React, { useMemo } from 'react';
import { useWindowDimensions, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { CardComp } from './card-comp';
import { projects } from '@/constants/projects';

const ProjectListRenderer = () => {
  const { width: screenWidth } = useWindowDimensions();
  const cardRowForResponsive = useMemo(() => (screenWidth > 960 ? 2 : 2), [screenWidth]);
  const numRows = Math.ceil(projects.length / cardRowForResponsive);

  return (
    <View className="flex-1 space-y-4">
      {Array.from({ length: numRows }).map((_, rowIndex) => {
        const rowItems = projects.slice(
          rowIndex * cardRowForResponsive,
          (rowIndex + 1) * cardRowForResponsive
        );

        return (
          <View key={rowIndex} className="flex-row gap-4">
            {rowItems.map((item, index) => (
              <View key={item.id.toString() + rowIndex.toString()} className="flex-1">
                <CardComp item={item} index={rowIndex * cardRowForResponsive + index} />
              </View>
            ))}
            {/* Add placeholder views to maintain grid structure */}
            {rowItems.length < cardRowForResponsive &&
              Array.from({ length: cardRowForResponsive - rowItems.length }).map((_, i) => (
                <View key={`empty-${i}`} className="flex-1" />
              ))}
          </View>
        );
      })}
    </View>
  );
};

export default ProjectListRenderer;
