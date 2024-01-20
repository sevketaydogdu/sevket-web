import { Platform } from 'react-native';

import MobileHomeScreen from '../../src/screens/home/mobileHomeScreen';
import WebHomeScreen from '../../src/screens/home/webHomeScreen';

export default function TabOneScreen() {
  if (Platform.OS === 'web') {
    return <WebHomeScreen />;
  }
  return <MobileHomeScreen />;
}
