import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const user = {
    name: 'Felipe Flores',
    email: 'f.floresmaque@gmail.com',
    birthdate: '23/07/2004',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Perfil</Text>
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.info}>{user.name}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.info}>{user.email}</Text>
      <Text style={styles.label}>Cumpleaños:</Text>
      <Text style={styles.info}>{user.birthdate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfileScreen;
