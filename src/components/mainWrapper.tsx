import { ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { TamaguiProvider, Theme } from 'tamagui';
import config from '../../tamagui.config';
import { DarkTheme } from '../constants/navigatiorTheme';

interface IMainWrapper {
  children: React.ReactNode;
}

export const MainWrapper: React.FC<IMainWrapper> = ({ children }) => {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={config}>
      <Theme name={'light'}>{children}</Theme>
    </TamaguiProvider>
  );
};
