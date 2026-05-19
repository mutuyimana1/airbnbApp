// components/SleepSection.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../styles/globalStyles';


interface SleepSectionProps {
  bedType: string;
}

export default function SleepSection({
  bedType,
}: SleepSectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />

      <Text style={styles.title}>
        Where you’ll sleep
      </Text>

      <View style={styles.card}>
        <Ionicons
          name="bed-outline"
          size={28}
          color="#000"
        />

        <Text style={styles.roomTitle}>
          Bedroom
        </Text>

        <Text style={styles.bedType}>
          {bedType}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 8,
  },

  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginBottom: 28,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.text,
  },

  card: {
    width: 140,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 16,
    padding: 18,
    marginTop: 22,
  },

  roomTitle: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },

  bedType: {
    marginTop: 6,
    fontSize: 15,
    color: colors.textSecondary,
  },
});