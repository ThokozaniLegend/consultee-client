// src/screens/VideoCallScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function VideoCallScreen({ route }) {
  // later: connect to Twilio/Agora with token from backend
  return (
    <View style={styles.container}>
      <Header title="Consultation" subtitle="Video call (placeholder)" />
      <View style={styles.center}>
        <Text style={styles.text}>Video / audio session will appear here when integrated.</Text>
        <Text style={{ color:'#6b7280', marginTop:8 }}>For now this is a placeholder screen.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#fff' },
  center: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  text: { fontSize:16, fontWeight:'600' }
});
