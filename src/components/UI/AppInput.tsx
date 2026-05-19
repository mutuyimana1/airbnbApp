// components/ui/AppInput.tsx

import React, { useState } from 'react';

import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '@/src/styles/globalStyles';


interface AppInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;

  placeholder?: string;

  label?: string;

  secureTextEntry?: boolean;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;

  containerStyle?: ViewStyle;

  error?: string;
}

export default function AppInput({
  value,
  onChangeText,
  placeholder,
  label,
  secureTextEntry = false,
  leftIcon,
  rightIcon,
  containerStyle,
  error,
  ...props
}: AppInputProps) {
  const [showPassword, setShowPassword] =
    useState(false);

  const isPassword =
    secureTextEntry && !showPassword;

  return (
    <View style={containerStyle}>
      {label && (
        <View style={styles.labelWrapper}>
          <Ionicons
            name="ellipse"
            size={0}
            color="transparent"
          />
        </View>
      )}

      <View
        style={[
          styles.container,
          error && styles.errorBorder,
        ]}
      >
        {/* LEFT ICON */}
        {leftIcon && (
          <View style={styles.leftIcon}>
            {leftIcon}
          </View>
        )}

        {/* INPUT */}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={isPassword}
          style={styles.input}
          {...props}
        />

        {/* PASSWORD TOGGLE */}
        {secureTextEntry ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              setShowPassword(
                !showPassword
              )
            }
          >
            <Ionicons
              name={
                showPassword
                  ? 'eye-outline'
                  : 'eye-off-outline'
              }
              size={22}
              color="#6B7280"
            />
          </TouchableOpacity>
        ) : (
          rightIcon
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labelWrapper: {
    marginBottom: 8,
  },

  container: {
    minHeight: 58,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },

  leftIcon: {
    marginRight: 12,
  },

  errorBorder: {
    borderColor: '#EF4444',
  },
});