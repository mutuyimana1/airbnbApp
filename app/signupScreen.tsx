// screens/SignupScreen.tsx

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
import PrimaryText from '@/src/components/UI/PrimaryText';
import SecondaryText from '@/src/components/UI/SecondaryText';
import AppInput from '@/src/components/UI/AppInput';
import PrimaryButton from '@/src/components/UI/PrimaryButton';
import SecondaryButton from '@/src/components/UI/SecondaryButton';
import { colors, globalStyles } from '@/src/styles/globalStyles';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './(tabs)/list';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignupScreen() {
  const [accountType, setAccountType] =
    useState<'guest' | 'host'>(
      'guest'
    );

  const [fullName, setFullName] =
    useState('');

  const [email, setEmail] =
    useState('');
  const [userName, setUserName] =
    useState('');

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
              title="Create account"
              size={40}
              weight="700"
            />

            <SecondaryText
              title="Choose how you want to use the platform."
              size={17}
              lineHeight={28}
              style={styles.subtitle}
            />
          </View>

          {/* ACCOUNT TYPE */}
          <View style={styles.accountTypeWrapper}>
            {/* GUEST */}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                setAccountType('guest')
              }
              style={[
                styles.accountCard,
                accountType ===
                  'guest' &&
                  styles.activeCard,
              ]}
            >
              <View
                style={[
                  styles.iconWrapper,
                  accountType ===
                    'guest' &&
                    styles.activeIconWrapper,
                ]}
              >
                <Ionicons
                  name="person-outline"
                  size={28}
                  color={
                    accountType ===
                    'guest'
                      ? '#fff'
                      : '#000'
                  }
                />
              </View>

              <PrimaryText
                title="Guest"
                size={18}
                weight="700"
                style={styles.cardTitle}
              />

              <SecondaryText
                title="Book stays and experiences."
                size={14}
                align="center"
                lineHeight={22}
              />
            </TouchableOpacity>

            {/* HOST */}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                setAccountType('host')
              }
              style={[
                styles.accountCard,
                accountType ===
                  'host' &&
                  styles.activeCard,
              ]}
            >
              <View
                style={[
                  styles.iconWrapper,
                  accountType ===
                    'host' &&
                    styles.activeIconWrapper,
                ]}
              >
                <Ionicons
                  name="home-outline"
                  size={28}
                  color={
                    accountType ===
                    'host'
                      ? '#fff'
                      : '#000'
                  }
                />
              </View>

              <PrimaryText
                title="Host"
                size={18}
                weight="700"
                style={styles.cardTitle}
              />

              <SecondaryText
                title="List properties and earn money."
                size={14}
                align="center"
                lineHeight={22}
              />
            </TouchableOpacity>
          </View>

          {/* FORM */}
          <View style={styles.form}>
            <AppInput
              value={fullName}
              onChangeText={
                setFullName
              }
              placeholder="Full name"
              leftIcon={
                <Ionicons
                  name="person-outline"
                  size={22}
                  color="#6B7280"
                />
              }
            />

            <AppInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email address"
              keyboardType="email-address"
              autoCapitalize="none"
              containerStyle={{
                marginTop: 18,
              }}
              leftIcon={
                <Ionicons
                  name="mail-outline"
                  size={22}
                  color="#6B7280"
                />
              }
            />
            <AppInput
              value={userName}
              onChangeText={setUserName}
              placeholder="Username"
              autoCapitalize="none"
              containerStyle={{
                marginTop: 18,
              }}
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

            {/* BUTTON */}
            <PrimaryButton
              title={`Continue as ${
                accountType ===
                'guest'
                  ? 'Guest'
                  : 'Host'
              }`}
              style={styles.button}
            />

            {/* OPTIONAL */}
            <SecondaryButton
              title="Learn more"
              style={styles.learnMore}
            />
          </View>

          {/* FOOTER */}
          <View style={styles.footer}>
            <SecondaryText
              title="Already have an account?"
              size={16}
            />

            <TouchableOpacity onPress={()=>navigation.navigate("loginScreen")}>
              <PrimaryText
                title=" Login"
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
    paddingTop: 60,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 34,
  },

  subtitle: {
    marginTop: 12,
  },

  accountTypeWrapper: {
    flexDirection: 'row',
    gap: 14,
  },

  accountCard: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 22,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  activeCard: {
    borderColor: colors.primary,
    backgroundColor:
      'rgba(212,47,77,0.05)',
  },

  iconWrapper: {
    width: 58,
    height: 58,
    borderRadius: 100,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeIconWrapper: {
    backgroundColor: colors.primary,
  },

  cardTitle: {
    marginTop: 16,
    marginBottom: 8,
  },

  form: {
    marginTop: 34,
  },

  button: {
    marginTop: 30,
  },

  learnMore: {
    marginTop: 14,
  },

  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
});