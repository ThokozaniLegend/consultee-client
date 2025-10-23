// src/screens/RequestScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Picker } from '@react-native-picker/picker';

export default function RequestScreen({ route, navigation }) {
  const { categoryTitle, subtype } = route.params || {};
  const [duration, setDuration] = useState('30'); // minutes
  const [notes, setNotes] = useState('');
  const [mode, setMode] = useState('instant'); // instant or scheduled

  const estimatePerMin = 1.0; // price placeholder
  const estimate = (parseInt(duration || '0', 10) * estimatePerMin).toFixed(2);

  const handleRequest = async () => {
    try {
      const doc = {
        clientId: 'TEST_CLIENT', // replace later with auth
        consultantId: null,
        category: categoryTitle,
        subtype,
        durationMinutes: parseInt(duration, 10),
        notes,
        mode,
        priceEstimate: parseFloat(estimate),
        status: 'requested',
        createdAt: serverTimestamp(),
      };
      const ref = await addDoc(collection(db, 'consultations'), doc);
      Alert.alert('Requested', `Consultation requested (id: ${ref.id})`);
      navigation.popToTop();
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Could not request consultation. Check console.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header title={`Request — ${categoryTitle}`} subtitle={subtype} />
        <View style={styles.form}>
          <Text style={styles.label}>Mode</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={mode}
              onValueChange={(v) => setMode(v)}
              style={styles.picker}
            >
              <Picker.Item label="Instant (asap)" value="instant" />
              <Picker.Item label="Schedule (choose time later)" value="scheduled" />
            </Picker>
          </View>

          <Text style={styles.label}>Duration (minutes)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={duration}
            onChangeText={setDuration}
          />

          <Text style={styles.label}>Notes for consultant (optional)</Text>
          <TextInput
            style={[styles.input, { height: 90 }]}
            multiline
            value={notes}
            onChangeText={setNotes}
          />

          <View style={styles.estimateRow}>
            <Text style={styles.estimateText}>Estimate: R{estimate}</Text>
          </View>

          <PrimaryButton title="Request Consultation" onPress={handleRequest} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  form: {
    padding: 18,
    flexGrow: 1,
  },
  label: {
    marginTop: 12,
    color: '#374151',
    fontWeight: '600',
  },
  input: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 10,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    marginTop: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 45,
    width: '100%',
  },
  estimateRow: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  estimateText: {
    fontSize: 14,
    color: '#374151',
  },
});
