import React from 'react'; // Impor React
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/contexts/ThemeContext'; // Import useTheme

export default function NotFoundScreen() {
  const { theme } = useTheme(); // Ambil tema dari context (light atau dark)

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView
        style={[
          styles.container,
          { backgroundColor: theme === 'dark' ? '#222' : '#fff' }, // Sesuaikan latar belakang dengan tema
        ]}
      >
        <ThemedText type="title" style={{ color: theme === 'dark' ? '#fff' : '#000' }}>
          This screen doesn't exist.
        </ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link" style={{ color: theme === 'dark' ? '#ddd' : '#0066cc' }}>
            Go to home screen!
          </ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
