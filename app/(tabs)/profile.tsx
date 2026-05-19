// screens/ProfileScreen.tsx

import React from 'react';

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import PrimaryText from '@/src/components/UI/PrimaryText';
import { colors, globalStyles } from '@/src/styles/globalStyles';
import SecondaryText from '@/src/components/UI/SecondaryText';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsList from '@/src/components/UI/SettingLists';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './list';
import { useNavigation } from 'expo-router';


const settingsData = [
  {
    title: 'Personal information',
    icon: <Ionicons name="person-circle-outline" size={24} color={colors.primary} />,
    content:
      'Manage your personal details, identity verification, and contact information.',
  },

  {
    title: 'Payments and payouts',
    icon: <Ionicons name="wallet-outline" size={24} color={colors.primary} />,
    content:
      'Update payment methods and manage payout preferences.',
  },

  {
    title: 'Translation',
    icon: <Ionicons name="language-outline" size={24} color={colors.primary} />,
    content:
      'Choose your preferred language and translation settings.',
  },

  {
    title: 'Notifications',
    icon: <Ionicons name="notifications-outline" size={24} color={colors.primary} />,
    content:
      'Manage push notifications, email alerts, and reminders.',
  },

  {
    title: 'Privacy and sharing',
    icon: <Ionicons name="lock-closed-outline" size={24} color={colors.primary} />,
    content:
      'Control your privacy, visibility, and data sharing settings.',
  },

  {
    title: 'Travel for work',
    icon: <Ionicons name="briefcase-outline" size={24} color={colors.primary} />,
    content:
      'Manage work travel preferences and business account settings.',
  },
];

export default function ProfileScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={[globalStyles.container,{paddingTop:12}]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            }}
            style={styles.avatar}
          />

          <PrimaryText
            title="John"
            size={30}
            style={styles.name}
          />

          <TouchableOpacity>
            <PrimaryText
              title="View profile"
              size={18}
              weight="600"
              style={styles.profileLink}
            />
          </TouchableOpacity>
        </View>

        {/* HOSTING CARD */}
        <View style={styles.hostingCard}>
          <View style={styles.hostingLeft}>
            <View style={styles.hostingIcon}>
              <Ionicons
                name="home-outline"
                size={28}
                color={colors.primary}
              />
            </View>

            <View style={{ flex: 1 }}>
              <SecondaryText
                title="Earn money from your extra space"
                size={17}
                color="#4B4B4B"
                lineHeight={26}
              />

              <TouchableOpacity>
                <PrimaryText
                  title="Learn more"
                  size={17}
                  weight="600"
                  style={{
                    textDecorationLine:
                      'underline',
                    marginTop: 6,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* DIVIDER */}
        <View style={styles.bigDivider} />

        {/* SETTINGS */}
        <View style={styles.section}>
          <PrimaryText
            title="Account Settings"
            size={24}
          />

          <SettingsList
            data={settingsData}
          />
          <TouchableOpacity onPress={() => navigation.navigate('loginScreen')}>
                <PrimaryText
                  title="Logout"
                  color={colors.primary}
                  size={17}
                  style={{
                    marginTop: 6,
                  }}
                />
              </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  header: {
    paddingHorizontal: 24,
  },

  avatar: {
    width: 74,
    height: 74,
    borderRadius: 100,
  },

  name: {
    marginTop: 26,
  },

  profileLink: {
    marginTop: 14,
    textDecorationLine: 'underline',
  },

  hostingCard: {
    paddingHorizontal: 24,
    marginTop: 60,
  },

  hostingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  hostingIcon: {
    width: 48,
    marginRight: 18,
  },

  bigDivider: {
    height: 1,
    backgroundColor: '#DADADA',
    marginTop: 36,
  },

  section: {
    paddingHorizontal: 24,
    paddingTop: 38,
    paddingBottom: 50,
  },
});