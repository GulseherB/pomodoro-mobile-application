import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ReportsScreen() {
  // Örnek istatistikler
  const stats = [
    { label: 'Bugün', value: '0 dk', icon: 'today', color: '#2e86ab' },
    { label: 'Toplam Süre', value: '0 dk', icon: 'timer', color: '#a23b72' },
    { label: 'Dikkat Dağınıklığı', value: '0', icon: 'error-outline', color: '#f18f01' },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <MaterialIcons name="bar-chart" size={40} color="#a23b72" style={{ marginBottom: 10 }} />
      <Text style={styles.title}>Raporlar</Text>
      <View style={styles.statsRow}>
        {stats.map((item, idx) => (
          <View key={item.label} style={[styles.statCard, { borderColor: item.color }]}>
            <MaterialIcons name={item.icon} size={28} color={item.color} style={{ marginBottom: 4 }} />
            <Text style={styles.statLabel}>{item.label}</Text>
            <Text style={styles.statValue}>{item.value}</Text>
          </View>
        ))}
      </View>
      <View style={styles.emptyContainer}>
        <MaterialIcons name="info-outline" size={32} color="#6c757d" style={{ marginBottom: 4 }} />
        <Text style={styles.body}>Henüz kaydedilen bir seans yok.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f4f5f7',
    paddingTop: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#a23b72',
    marginBottom: 18,
    letterSpacing: 0.5,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginHorizontal: 6,
    borderWidth: 2,
    minWidth: 90,
    elevation: 2,
  },
  statLabel: {
    fontSize: 13,
    color: '#6c757d',
    marginBottom: 2,
  },
  statValue: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1f2933',
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  body: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
  },
});
