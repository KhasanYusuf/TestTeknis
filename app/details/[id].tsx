import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/contexts/ThemeContext';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const { theme } = useTheme();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [id]);

  // Render user details
  if (!user) {
    return (
      <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000' : '#fff' }]}>
        <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000' : '#fff' }]}>
      <Text style={[styles.title, { color: theme === 'dark' ? '#fff' : '#000' }]}>User Details</Text>

      <View style={styles.profileContainer}>
        <Image
          source={{ uri: `https://i.pravatar.cc/150?img=${id}` }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <Text style={[styles.text, { color: theme === 'dark' ? '#ddd' : '#000' }]}>Name: {user.name}</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#ddd' : '#000' }]}>Email: {user.email}</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#ddd' : '#000' }]}>Phone: {user.phone}</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#ddd' : '#000' }]}>Website: {user.website}</Text>
      <Text style={[styles.text, { color: theme === 'dark' ? '#ddd' : '#000' }]}>Company: {user.company.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ddd',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
