import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { Icon } from 'react-native-elements';
import { ThemeContext } from '@/contexts/ThemeContext';

export default function HomeScreen() {
  const { theme } = useContext(ThemeContext) || { theme: 'light' };
  const [users, setUsers] = useState<any[]>([]);

  // Fetch data user dari API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Render tabel data pengguna
  const renderItem = ({ item }: { item: any }) => (
    <View style={[styles.row, { backgroundColor: theme === 'dark' ? '#333' : '#fff' }]}>
      <Text style={[styles.cell, { color: theme === 'dark' ? '#fff' : '#000' }]}>{item.name}</Text>
      <Text style={[styles.cell, { color: theme === 'dark' ? '#aaa' : '#555' }]}>{item.email}</Text>
      <Link
        href={{
          pathname: '/details/[id]',
          params: { id: item.id.toString() },
        }}
        style={styles.link}>
        View Details
      </Link>
    </View>
  );

  const renderHeader = () => (
    <View style={[styles.headerRow, { backgroundColor: theme === 'dark' ? '#111' : '#e0e0e0' }]}>
      <Text style={[styles.headerCell, { color: theme === 'dark' ? '#fff' : '#000' }]}>Name</Text>
      <Text style={[styles.headerCell, { color: theme === 'dark' ? '#fff' : '#000' }]}>Email</Text>
      <Text style={[styles.headerCell, { color: theme === 'dark' ? '#fff' : '#000' }]}>Actions</Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#000' : '#f4f4f4' }]}>
      <View style={[styles.header, { backgroundColor: theme === 'dark' ? '#111' : 'blue' }]}>
        <Text style={[styles.headerText, { color: '#fff' }]}>Test Teknis</Text>
        <Link href="/profile">
          <View style={styles.profileContainer}>
            <Icon name="person" size={30} color={theme === 'dark' ? '#ddd' : '#fff'} />
            <Text style={[styles.profileText, { color: theme === 'dark' ? '#ddd' : '#fff' }]}>Profile</Text>
          </View>
        </Link>
      </View>

      <View style={styles.listTitleContainer}>
        <Text style={[styles.listTitle, { color: theme === 'dark' ? '#fff' : '#000' }]}>List Data</Text>
        <Text style={[styles.listText, { color: theme === 'dark' ? '#fff' : '#000' }]}>source: https://jsonplaceholder.typicode.com/</Text>
      </View>

      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileText: {
    fontSize: 12,
    marginTop: 5,
  },
  listTitleContainer: {
    marginVertical: 15,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  listText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
  },
  cell: {
    flex: 1,
    fontSize: 16,
  },
  link: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
  headerRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
  },
  headerCell: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
