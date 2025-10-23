// src/screens/HomeScreen.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';

const CATEGORIES = [
  { id: 'medical', title: 'Medical', color: '#eef2ff' },
  { id: 'spiritual', title: 'Spiritual', color: '#fff7ed' },
  { id: 'health', title: 'Health', color: '#f0fdf4' },
  { id: 'financial', title: 'Financial', color: '#f8fafc' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="AuraLink" subtitle="Choose a consultation category" />

      <View style={styles.content}>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(i) => i.id}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => (
            <CategoryCard
              title={item.title}
              color={item.color}
              onPress={() => navigation.navigate('Category', { categoryId: item.id, categoryTitle: item.title })}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  content: { padding: 18, paddingTop: 8 },
});
