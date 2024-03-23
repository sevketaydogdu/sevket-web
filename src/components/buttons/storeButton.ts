import { Text, Button, styled } from 'tamagui';

export const StoreButton = styled(Button, {
  target: '_blank',
  fd: 'column',
  space: '$1',
  py: '$4',
  px: '$6',
  mt: '$4',
  bg: '$backgroundFocus',
});

export const Link = styled(Text, {
  col: '$blue9Light',
  textDecorationLine: 'underline',
  fos: '$5',
});
