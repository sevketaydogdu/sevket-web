import React from 'react';
import { View, H1, Paragraph, Section, Image } from 'tamagui';

const AboutMeWeb = () => {
  return (
    <View
      fd="row"
      $lg={{
        fd: 'column',
      }}
      gap="$6">
      <Section w="30%" ai="center">
        <View
          style={{ width: 512, height: 512 }}
          br={255}
          p="$6"
          overflow="hidden"
          ai="center"
          jc="center">
          <Image source={require('../../../assets/images/icon.png')} />
        </View>
      </Section>
      <Section f={1} fd="column" bg="red">
        <H1>About Me</H1>
        <Paragraph fos="$6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit libero id, aspernatur
          omnis ea praesentium dolorem sapiente dolore inventore asperiores quidem, iusto non hic
          explicabo ipsam? Et, placeat laborum. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Alias ullam voluptas excepturi temporibus ipsa accusamus quisquam, necessitatibus,
          cumque, quasi animi facilis itaque consequatur ut officiis? Ipsam minima itaque totam
          blanditiis.
        </Paragraph>
      </Section>
    </View>
  );
};

export default AboutMeWeb;
