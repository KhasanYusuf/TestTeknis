import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemedTextProps {
  style?: TextStyle;
  type: 'title' | 'link';
  children: React.ReactNode;
}

export const ThemedText: React.FC<ThemedTextProps> = ({ style, type, children }) => {
  const { theme } = useTheme();
  
  // Menyesuaikan style berdasarkan tema
  const textStyle = {
    color: theme === 'dark' ? '#fff' : '#000',
    fontSize: type === 'title' ? 24 : 16,
    ...style,
  };

  return <Text style={textStyle}>{children}</Text>;
};
