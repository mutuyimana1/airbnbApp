// components/ui/SecondaryText.tsx

import { colors } from '@/src/styles/globalStyles';
import React from 'react';
import {
  Text,
  TextProps,
  StyleSheet,
  TextStyle,
} from 'react-native';


interface SecondaryTextProps extends TextProps {
  title: string;
  size?: number;
  color?: string;
  weight?: TextStyle['fontWeight'];
  align?: TextStyle['textAlign'];
  lineHeight?: number;
  style?: TextStyle;
  numberOfLines?: number;
}

export default function SecondaryText({
  title,
  size = 15,
  color = colors.textSecondary,
  weight = '400',
  align = 'left',
  lineHeight,
  style,
  numberOfLines,
  ...props
}: SecondaryTextProps) {
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
          lineHeight,
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
    color: colors.textSecondary,
  },
});