// src/components/CategoryCard.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function CategoryCard({ title, onPress, color='#eef2ff' }) {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: color }]} onPress={onPress}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cta}>Tap to explore</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: '600', color: '#0f172a' },
  cta: { marginTop: 6, fontSize: 13, color: '#374151' },
});
