import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemedViewProps {
  style?: ViewStyle;
  children: React.ReactNode;
}

export const ThemedView: React.FC<ThemedViewProps> = ({ style, children }) => {
  const { theme } = useTheme();

  // Menyesuaikan backgroundColor sesuai tema
  const viewStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    flex: 1,
    ...style,
  };

  return <View style={viewStyle}>{children}</View>;
};
