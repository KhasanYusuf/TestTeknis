import React from 'react';
import { View, Text, StyleSheet, Linking, Image } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

export default function ProfileScreen() {
  const { theme } = useTheme();

  const handleGitHubLink = () => {
    Linking.openURL('https://github.com/KhasanYusuf/');
  };
  const handleLinkedInLink = () => {
    Linking.openURL('linkedin.com/in/khasan-yusuf-5a9739312/');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000' : '#fff' }]}>
      <View style={styles.profileContainer}>
        <Image
          source={require('@/assets/images/profile.jpg')}
          style={styles.profileImage}
        />
      </View>
      <Text style={[styles.title, { color: theme === 'dark' ? '#fff' : '#000' }]}>Profile</Text>

      <View style={styles.infoContainer}>
        <Text style={[styles.infoText, { color: theme === 'dark' ? '#ddd' : '#000' }]}>
          Name: Khasan Yusuf
        </Text>
        <Text style={[styles.infoText, { color: theme === 'dark' ? '#ddd' : '#000' }]}>
          Email: khasanyusuf11@gmail.com
        </Text>
        <Text style={[styles.infoText, { color: theme === 'dark' ? '#ddd' : '#000' }]}>
          LinkedIn: <Text style={styles.link} onPress={handleLinkedInLink}>
          linkedin.com/in/khasan-yusuf-5a9739312/
          </Text>
          </Text>
        <Text style={[styles.infoText, { color: theme === 'dark' ? '#ddd' : '#000' }]}>
          GitHub: <Text style={styles.link} onPress={handleGitHubLink}>
            https://github.com/khasan-yusuf
          </Text>
        </Text>
      </View>

      <Text style={[styles.about, { color: theme === 'dark' ? '#ddd' : '#555' }]}>
        Saya mahasiswa S1 Teknik Informatika di Unversitas Negeri Malang. Saya memiliki semangat untuk belajar dan memahami dengan mendalam terhadap bidang Pengembangan aplikasi web dan Machine learning. Cita-cita saya adalah bekerja di bidang implementasi AI dan Machine learning atau Software Development. Saya memiliki pengalaman dalam menggunakan 5 bahasa pemrograman, diantaranya yaitu: Python, C++, Java, Php, dan Julia serta pemahaman dalam konsep Object oriented Programing dan data science.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  about: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
