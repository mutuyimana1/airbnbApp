// components/ui/PrimaryButton.tsx

import React from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';

import PrimaryText from './PrimaryText';
import { colors } from '@/src/styles/globalStyles';


interface PrimaryButtonProps {
  title: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;

  backgroundColor?: string;
  textColor?: string;

  height?: number;
  borderRadius?: number;

  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function PrimaryButton({
  title,
  onPress,
  loading = false,
  disabled = false,

  backgroundColor = colors.primary,
  textColor = '#FFFFFF',
  height = 52,
  
  borderRadius = 14,

  style,
  textStyle,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor,
          height,
          borderRadius,
        },
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <PrimaryText
          title={title}
          color={textColor}
          size={16}
          weight="700"
          style={textStyle}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  disabled: {
    opacity: 0.6,
  },
});