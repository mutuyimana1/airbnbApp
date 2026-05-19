// screens/LoginScreen.tsx

import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import AppInput from '@/src/components/UI/AppInput';
import SecondaryText from '@/src/components/UI/SecondaryText';
import PrimaryText from '@/src/components/UI/PrimaryText';
import PrimaryButton from '@/src/components/UI/PrimaryButton';
import { colors, globalStyles } from '@/src/styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './(tabs)/list';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] =
    useState('');
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={globalStyles.container}>
      <KeyboardAvoidingView
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={
            styles.scrollContent
          }
          showsVerticalScrollIndicator={
            false
          }
        >
          {/* HEADER */}
          <View style={styles.header}>
            <PrimaryText
              title="Welcome back"
              size={40}
              weight="700"
            />

            <SecondaryText
              title="Login to continue exploring stays and experiences."
              size={17}
              lineHeight={28}
              style={styles.subtitle}
            />
          </View>

          {/* FORM */}
          <View style={styles.form}>
            <AppInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email address"
              keyboardType="email-address"
              autoCapitalize="none"
              leftIcon={
                <Ionicons
                  name="mail-outline"
                  size={22}
                  color="#6B7280"
                />
              }
            />

            <AppInput
              value={password}
              onChangeText={
                setPassword
              }
              placeholder="Password"
              secureTextEntry
              containerStyle={{
                marginTop: 18,
              }}
              leftIcon={
                <Ionicons
                  name="lock-closed-outline"
                  size={22}
                  color="#6B7280"
                />
              }
            />

            {/* FORGOT */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={
                styles.forgotWrapper
              }
            >
              <PrimaryText
                title="Forgot password?"
                size={15}
                weight="600"
                style={{
                  textDecorationLine:
                    'underline',
                }}
              />
            </TouchableOpacity>

            {/* BUTTON */}
            <PrimaryButton
              title="Login"
              style={styles.button}
            />
          </View>

          {/* FOOTER */}
          <View style={styles.footer}>
            <SecondaryText
              title="Don't have an account?"
              size={16}
            />

            <TouchableOpacity onPress={() => {navigation.navigate('signupScreen')}}>
              <PrimaryText
                title=" Sign up"
                size={16}
                weight="700"
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      colors.background,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 70,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 50,
  },

  subtitle: {
    marginTop: 14,
  },

  form: {
    marginTop: 10,
  },

  forgotWrapper: {
    alignSelf: 'flex-end',
    marginTop: 18,
  },

  button: {
    marginTop: 30,
  },

  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
});