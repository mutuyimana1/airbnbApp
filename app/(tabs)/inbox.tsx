// screens/InboxScreen.tsx

import PrimaryText from '@/src/components/UI/PrimaryText';
import SecondaryText from '@/src/components/UI/SecondaryText';
import { colors, globalStyles } from '@/src/styles/globalStyles';
import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const tabs = [
  {
    id: 'messages',
    title: 'Messages',
    count: 1,
  },
  {
    id: 'notifications',
    title: 'Notifications',
  },
];

const inboxData = [
  {
    id: '1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg',
    title: 'Craig',
    subtitle:
      "Alright got it we’ll make do thanks a lot",
    isLogo: true,
  },

  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    title: 'Craig',
    location: 'Yonkers',
    subtitle:
      'Airbnb update: Reservation canceled',
    description:
      'Canceled · Feb 13 - 14, 2023',
  },

  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    title: 'Erin',
    location: 'New York',
    subtitle: 'New date and time request',
    description: 'Request pending',
  },
];

export default function InboxScreen() {
  const [activeTab, setActiveTab] =
    useState('messages');

  const renderItem = ({
    item,
  }: {
    item: (typeof inboxData)[0];
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.messageCard}
      >
        {/* AVATAR */}
        <View style={styles.avatarWrapper}>
          {item.isLogo ? (
            <View style={styles.logoContainer}>
              <Image
                source={{ uri: item.image }}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
          ) : (
            <Image
              source={{ uri: item.image }}
              style={styles.avatar}
            />
          )}
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          <View style={styles.nameRow}>
            <PrimaryText
              title={item.title}
              size={17}
              weight="700"
            />

            {item.location && (
              <SecondaryText
                title={` · ${item.location}`}
                size={17}
                color="#7A7A7A"
              />
            )}
          </View>

          <PrimaryText
            title={item.subtitle}
            size={16}
            weight={
              item.description
                ? '700'
                : '400'
            }
            style={styles.subtitle}
          />

          {item.description && (
            <SecondaryText
              title={item.description}
              size={15}
              style={styles.description}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <PrimaryText
          title="Inbox"
          size={30}
          weight="700"
        />
      </View>

      {/* TABS */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => {
          const isActive =
            activeTab === tab.id;

          return (
            <TouchableOpacity
              key={tab.id}
              activeOpacity={0.9}
              onPress={() =>
                setActiveTab(tab.id)
              }
              style={styles.tabButton}
            >
              <View style={styles.tabRow}>
                <PrimaryText
                  title={tab.title}
                  size={17}
                  weight="700"
                  color={
                    isActive
                      ? '#000'
                      : '#A1A1A1'
                  }
                />

                {tab.count && (
                  <View
                    style={styles.badge}
                  >
                    <PrimaryText
                      title={String(
                        tab.count
                      )}
                      size={13}
                      color="#fff"
                    />
                  </View>
                )}
              </View>

              {isActive && (
                <View
                  style={
                    styles.activeIndicator
                  }
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* DIVIDER */}
      <View style={styles.topDivider} />

      {/* LIST */}
      <FlatList
        data={inboxData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 2,
  },

  header: {
    paddingHorizontal: 24,
    marginBottom: 20,
  },

  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    height: 50,
  },

  tabButton: {
    marginRight: 26,
  },

  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  badge: {
    minWidth: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    paddingHorizontal: 8,
  },

  activeIndicator: {
    marginTop: 14,
    height: 3,
    backgroundColor: '#000',
    borderRadius: 10,
  },

  topDivider: {
    height: 1,
    backgroundColor: '#ECECEC',
  },

  messageCard: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 28,
  },

  avatarWrapper: {
    marginRight: 16,
  },

  avatar: {
    width: 62,
    height: 62,
    borderRadius: 100,
  },

  logoContainer: {
    width: 62,
    height: 62,
    borderRadius: 100,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 34,
    height: 34,
    tintColor: '#fff',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  subtitle: {
    marginTop: 4,
    lineHeight: 24,
  },

  description: {
    marginTop: 6,
  },

  separator: {
    height: 1,
    backgroundColor: '#ECECEC',
    marginLeft: 24,
  },
});