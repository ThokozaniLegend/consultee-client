// src/screens/CategoryScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

const SUBTYPES_BY_CATEGORY = {
  medical: ['Western (Doctor)', 'Traditional (Healer)', 'Telemedicine Nurse'],
  spiritual: ['Pastor / Clergy', 'Medium', 'Life Coach'],
  health: ['Nutritionist', 'Psychologist', 'Physio', 'Fitness Coach'],
  financial: ['Financial Advisor', 'Tax Consultant', 'Budget Coach'],
};

export default function CategoryScreen({ route, navigation }) {
  const { categoryId, categoryTitle } = route.params || {};
  const items = SUBTYPES_BY_CATEGORY[categoryId] || [];

  return (
    <View style={styles.container}>
      <Header title={categoryTitle} subtitle="Select a specialty" />
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(s) => s}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Request', { categoryTitle, subtype: item })}>
              <Text style={styles.cardTitle}>{item}</Text>
              <Text style={styles.cardSub}>From R0.50 / min · Instant & Scheduled</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  list: { padding: 18 },
  card: { padding: 16, borderRadius: 10, backgroundColor: '#f8fafc', marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: '600' },
  cardSub: { marginTop: 6, color: '#6b7280', fontSize: 13 },
});
