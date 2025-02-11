import React, { useMemo } from 'react';
import { Text, useWindowDimensions, View, XStack } from 'tamagui';

import { CardComp } from './card-comp';

import { projects } from '@/constants/projects';

const ProjectListRenderer = () => {
  const { width: screenWidth } = useWindowDimensions();

  const cardRowForResponsive = useMemo(() => (screenWidth > 960 ? 2 : 2), [screenWidth]);
  const numRows = Math.ceil(projects.length / cardRowForResponsive);

  return (
    <View f={1}>
      {Array.from({ length: numRows }).map((row, rowIndex) => (
        <View key={rowIndex}>
          <XStack gap={16} f={1} fd="row">
            {/* Slice the projects array for the current row */}
            {projects
              .slice(rowIndex * cardRowForResponsive, (rowIndex + 1) * cardRowForResponsive)
              .map((item) => (
                <CardComp key={item.id.toString() + rowIndex.toString() + '3'} item={item} />
              ))}
          </XStack>
          {rowIndex < 2 - 1 && <View h={16} />}
        </View>
      ))}
    </View>
  );
};
export default ProjectListRenderer;
