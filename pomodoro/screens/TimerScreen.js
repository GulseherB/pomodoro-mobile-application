import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function TimerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Zamanlayıcı</Text>
      <Text style={styles.body}>Zamanlayıcı ekranı için temel iskelet.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f5f7',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1f2933',
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    color: '#4b5563',
  },
});
