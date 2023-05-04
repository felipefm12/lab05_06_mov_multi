import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Inicio</Text>
      {items.map(item => (
        <Text key={item.id} style={styles.item}>{item.name}</Text>
      ))}
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
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HomeScreen;
