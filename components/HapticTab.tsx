import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/contexts/ThemeContext';
import { ViewStyle } from 'react-native';

export function HapticTab(props: BottomTabBarButtonProps) {
  const { theme } = useTheme();

  const tabStyle: ViewStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
  };

  return (
    <PlatformPressable
      {...props}
      style={[tabStyle, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === 'ios') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}
