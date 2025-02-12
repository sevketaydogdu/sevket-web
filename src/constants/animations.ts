import { FadeIn, SlideInDown, SlideInLeft, SlideInRight } from 'react-native-reanimated';

export const animations = {
  entering: {
    fade: FadeIn.springify(150).damping(50),
    slideInDown: SlideInDown.springify(150).damping(1),
    slideInRight: SlideInRight.springify(200).damping(50),
    slideInLeft: SlideInLeft.springify(200).damping(50),
  },
};
