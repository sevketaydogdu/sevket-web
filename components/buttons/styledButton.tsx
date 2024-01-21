import Colors from 'constants/Colors';
import { Text, styled } from 'tamagui';

export const Button = styled(Text, {
  fow: '800',
  px: '$4',
  py: '$2',
  br: '$12',
  hoverStyle: { animation: 'lazy', bg: Colors.dark.orange[100] },
  selectable: false,
  cursor: 'pointer',
  variants: {
    filled: {
      true: {
        bg: Colors.dark.orange[200],
        hoverStyle: { bg: Colors.dark.orange[100] },
      },
    },
    outlined: {
      true: {
        hoverStyle: {
          col: Colors.dark.orange[200],
          bg: '$colorTransparent',
          outlineStyle: 'solid',
          outlineWidth: 2,
          outlineColor: Colors.dark.orange[200],
        },
      },
    },
    white: {
      true: {
        col: Colors.dark.black[300],
        bg: 'white',
        hoverStyle: {
          col: 'whitesmoke',
          bg: Colors.dark.orange[200],
        },
      },
    },
  },
});
