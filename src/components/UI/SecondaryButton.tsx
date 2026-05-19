// components/ui/SecondaryButton.tsx

import React from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

import PrimaryText from './PrimaryText';

interface SecondaryButtonProps {
  title: string;
  onPress?: () => void;

  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;

  borderRadius?: number;
  height?: number;
  borderWidth?: number;

  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function SecondaryButton({
  title,
  onPress,

  borderColor = '#000',
  backgroundColor = '#fff',
  textColor = '#000',

  borderRadius = 14,
  height = 52,
  borderWidth = 1.5,

  style,
  textStyle,
}: SecondaryButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.button,
        {
          borderColor,
          backgroundColor,
          borderRadius,
          height,
          borderWidth,
        },
        style,
      ]}
    >
      <PrimaryText
        title={title}
        color={textColor}
        size={16}
        weight="600"
        style={textStyle}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});