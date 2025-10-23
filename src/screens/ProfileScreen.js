// src/screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '../components/Header';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Header title="Profile" subtitle="Your account" />
      <View style={styles.content}>
        <Image source={{ uri: 'https://placehold.co/100x100' }} style={styles.avatar} />
        <Text style={styles.name}>Anonymous User</Text>
        <Text style={styles.info}>No. of sessions: 0</Text>
        <Text style={styles.info}>Balance: R0.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#fff' },
  content: { alignItems:'center', padding:20 },
  avatar: { width:100, height:100, borderRadius:50, backgroundColor:'#f3f4f6' },
  name: { marginTop:12, fontSize:18, fontWeight:'700' },
  info: { marginTop:6, color:'#6b7280' }
});
