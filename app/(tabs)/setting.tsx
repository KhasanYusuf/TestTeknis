import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '@/contexts/ThemeContext';

type Theme = 'light' | 'dark';

export default function SettingScreen() {
  const { theme, setTheme } = useTheme();
  const [selectedValue, setSelectedValue] = useState<Theme>(theme);

  const handleThemeChange = (value: Theme) => {
    setSelectedValue(value);
    setTheme(value); // Ubah tema berdasarkan pilihan
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: theme === 'dark' ? '#fff' : '#000' }]}>Settings</Text>

      <View style={[styles.segmentContainer, { backgroundColor: theme === 'dark' ? '#444' : '#f0f0f0' }]}>
        <Text style={[styles.segmentText, { color: theme === 'dark' ? '#fff' : '#000' }]}>Choose Theme</Text>

        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={handleThemeChange}
            style={[styles.picker, { color: theme === 'dark' ? '#fff' : '#000' }]}
          >
            <Picker.Item label="Light" value="light" />
            <Picker.Item label="Dark" value="dark" />
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  segmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  segmentText: {
    fontSize: 18,
    fontWeight: '500',
  },
  dropdownContainer: {
    width: 150,
  },
  picker: {
    width: '100%',
    height: 60,
  },
});
