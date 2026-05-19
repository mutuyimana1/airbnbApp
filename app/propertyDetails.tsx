// screens/ListingDetailsScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import AppButton from '@/src/components/AppButtons';
import { colors, globalStyles } from '@/src/styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import SleepSection from '@/src/components/SleepSetions';
import AmenitiesSection from '@/src/components/AminitiesSection';
import InfoSection from '@/src/components/InfoSections';
import { goBack } from 'expo-router/build/global-state/routing';
import PrimaryText from '@/src/components/UI/PrimaryText';
import SecondaryText from '@/src/components/UI/SecondaryText';

const { width, height } = Dimensions.get('window');

const images = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  'https://images.unsplash.com/photo-1494526585095-c41746248156',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
];

const IMAGE_HEIGHT = height * 0.42;

export default function ListingDetailsScreen() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="black"
      />

      {/* CONTENT */}
      <View style={styles.flex}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 130,
          }}
        >
          {/* IMAGE CAROUSEL */}
          <View style={styles.imageWrapper}>
            <Carousel
              loop={false}
              width={width}
              height={IMAGE_HEIGHT}
              data={images}
              pagingEnabled
              snapEnabled
              onSnapToItem={(index) =>
                setActiveIndex(index)
              }
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item }}
                  style={styles.image}
                />
              )}
            />

            {/* TOP ACTIONS */}
            <View style={styles.topActions}>
              <TouchableOpacity style={styles.iconButton} onPress={() => {goBack()}}>
                <Ionicons
                  name="arrow-back"
                  size={22}
                  color="#000"
                />
              </TouchableOpacity>

              <View style={styles.rightIcons}>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons
                    name="share-outline"
                    size={20}
                    color="#000"
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton}>
                  <Feather
                    name="more-vertical"
                    size={20}
                    color="#000"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* IMAGE COUNT */}
            <View style={styles.imageCount}>
              <Text style={styles.imageCountText}>
                {activeIndex + 1}/{images.length}
              </Text>
            </View>
          </View>

          {/* BODY */}
          <View style={styles.body}>
            {/* TITLE */}
            <PrimaryText title="Private room in Yonkers close to bus/train station" size={25} />

            {/* RATING */}
            <View style={styles.ratingRow}>
              <Ionicons
                name="star"
                size={14}
                color="#000"
              />

              <Text style={styles.ratingText}>
                5.0 · 3 reviews
              </Text>
            </View>

            <SecondaryText title="Yonkers, New York, United States" />

            <View style={styles.divider} />

            {/* HOST */}
            <View style={styles.hostSection}>
              <View style={{ flex: 1 }}>
                <Text style={styles.hostTitle}>
                  Private room in home hosted by
                  Craig
                </Text>

                <Text style={styles.hostInfo}>
                  2 guests · 1 bedroom · 1 bed
                </Text>

                <Text style={styles.hostInfo}>
                  1 private bath
                </Text>
              </View>

              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
                }}
                style={styles.hostImage}
              />
            </View>

            <View style={styles.divider} />

            {/* FEATURE */}
            <View style={styles.featureRow}>
              <View style={styles.featureIcon}>
                <Ionicons
                  name="key-outline"
                  size={22}
                  color="#000"
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.featureTitle}>
                  Self check-in
                </Text>

                <Text style={styles.featureSubtitle}>
                  Check yourself in with the
                  keypad.
                </Text>
              </View>
            </View>
          </View>
          <View>
            <InfoSection
  description="Enjoy a private and quiet bedroom and bathroom in Yonkers. Bus and train station are only minutes away. Train will take you to Manhattan in about 45 minutes. Cross County Mall and many restaurants are close by. Free parking. Fast WiFi. You have access"
/>

<SleepSection bedType="1 queen bed" />

<AmenitiesSection
  amenities={[
    {
      icon: 'water',
      title: 'River view',
    },
    {
      icon: 'kitchen',
      title: 'Kitchen',
    },
    {
      icon: 'wifi',
      title: 'Wifi',
    },
    {
      icon: 'car',
      title: 'Free parking on premises',
    },
    {
      icon: 'snow',
      title: 'AC - split type ductless system',
    },
  ]}
/>
          </View>
        </ScrollView>

        {/* BOTTOM BAR */}
        <View style={styles.bottomBar}>
          <View>
            <View style={styles.priceRow}>
              <Text style={styles.price}>
                $32
              </Text>

              <Text style={styles.night}>
                {' '}
                night
              </Text>
            </View>

            <Text style={styles.date}>
              Feb 13 - 14
            </Text>
          </View>

          <AppButton
            title="Reserve"
            style={styles.reserveButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  flex: {
    flex: 1,
  },

  imageWrapper: {
    width: '100%',
    height: IMAGE_HEIGHT,
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  topActions: {
    position: 'absolute',
    top: 15,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightIcons: {
    flexDirection: 'row',
    gap: 10,
  },

  imageCount: {
    position: 'absolute',
    bottom: 18,
    right: 18,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  imageCountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  body: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },

  title: {
    fontSize: 22,
    lineHeight: 32,
    fontWeight: '700',
    color: colors.text,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },

  ratingText: {
    marginLeft: 6,
    fontSize: 15,
    fontWeight: '500',
    color: colors.text,
  },

  location: {
    marginTop: 8,
    fontSize: 16,
    color: colors.textSecondary,
  },

  divider: {
    height: 1,
    backgroundColor: '#E8E8E8',
    marginVertical: 26,
  },

  hostSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  hostTitle: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '700',
    color: colors.text,
    marginRight: 10,
  },

  hostInfo: {
    marginTop: 6,
    fontSize: 16,
    color: colors.textSecondary,
  },

  hostImage: {
    width: 64,
    height: 64,
    borderRadius: 100,
  },

  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 20,
  },

  featureIcon: {
    marginRight: 16,
    marginTop: 3,
  },

  featureTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
  },

  featureSubtitle: {
    marginTop: 6,
    fontSize: 15,
    lineHeight: 22,
    color: colors.textSecondary,
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },

  night: {
    fontSize: 16,
    color: colors.text,
  },

  date: {
    marginTop: 4,
    fontSize: 15,
    color: colors.text,
    textDecorationLine: 'underline',
  },

  reserveButton: {
    minWidth: 130,
    height: 54,
    borderRadius: 14,
  },
});