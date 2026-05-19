// components/InfoSection.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../styles/globalStyles';


interface InfoSectionProps {
  description: string;
  onLearnMore?: () => void;
  onShowMore?: () => void;
}

export default function InfoSection({
  description,
  onLearnMore,
  onShowMore,
}: InfoSectionProps) {
  return (
    <View style={styles.container}>
      {/* AIR COVER */}
      <View>
        <Text style={styles.airCover}>
          <Text style={styles.air}>air</Text>
          cover
        </Text>

        <Text style={styles.airCoverText}>
          Every booking includes free
          protection from Host cancellations,
          listing inaccuracies, and other
          issues like trouble checking in.
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onLearnMore}
        >
          <Text style={styles.link}>
            Learn more
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      {/* DESCRIPTION */}
      <View>
        <Text style={styles.description}>
          {description}
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.showMoreRow}
          onPress={onShowMore}
        >
          <Text style={styles.link}>
            Show more
          </Text>

          <Ionicons
            name="chevron-forward"
            size={16}
            color="#000"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },

  airCover: {
    fontSize: 34,
    fontWeight: '800',
    color: '#000',
  },

  air: {
    color: '#FF385C',
  },

  airCoverText: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 23,
    color: colors.text,
  },

  link: {
    marginTop: 14,
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    textDecorationLine: 'underline',
  },

  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginVertical: 28,
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.text,
  },

  showMoreRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
});