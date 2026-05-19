// components/ui/PrimaryText.tsx

import { colors } from '@/src/styles/globalStyles';
import React from 'react';
import {
  Text,
  TextProps,
  StyleSheet,
  TextStyle,
} from 'react-native';

interface PrimaryTextProps extends TextProps {
  title: string;
  size?: number;
  color?: string;
  weight?: TextStyle['fontWeight'];
  align?: TextStyle['textAlign'];
  style?: TextStyle;
  numberOfLines?: number;
}

export default function PrimaryText({
  title,
  size = 16,
  color = colors.text,
  weight = '700',
  align = 'left',
  style,
  numberOfLines,
  ...props
}: PrimaryTextProps) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles.text,
        {
          fontSize: size,
          color,
          fontWeight: weight,
          textAlign: align,
        },
        style,
      ]}
      {...props}
    >
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.text,
  },
});