import { styled, Text } from 'tamagui';

import Colors from '@/constants/Colors';

export const ParagraphText = styled(Text, {
  color: 'white',
  fontSize: 24,
  textAlign: 'center',
});
export const FooterTitleText = styled(Text, {
  col: Colors.dark.orange[200],
  ff: '$heading',
  $gtLg: {
    fos: '$8',
  },
  $md: {
    fos: '$7',
  },
  fow: '200',
});
export const FooterText = styled(Text, {
  $gtLg: {
    fos: '$8',
  },
  $md: {
    fos: '$7',
  },
});
