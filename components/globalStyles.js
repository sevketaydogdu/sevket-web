// styles.js or globalStyles.js

import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  // Add your global styles here
  webkitScrollbar: {
    '::-webkit-scrollbar': {
      width: 12,
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#888',
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#555',
    },
   body: {
      overflowY: 'scroll', // Ensure scrollbar is always present
      scrollbarWidth: 'thin',
      scrollbarColor: '#888 #f5f5f5',
    },

  },
});

export default globalStyles;
