// components/ListingCard.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from '../styles/globalStyles';
import SecondaryText from './UI/SecondaryText';
import PrimaryText from './UI/PrimaryText';

const { width } = Dimensions.get('window');

const CARD_WIDTH = width > 500 ? 320 : width * 0.88;
const IMAGE_HEIGHT = CARD_WIDTH * 1.01;

interface ListingCardProps {
  images: string[];
  title:string;
  description?: string;
  location: string;
  country: string;
  distance: string;
  dateRange: string;
  price: number;
  rating: number;
  reviews: number;
  liked?: boolean;
  onPress?: () => void;
  onFavoritePress?: () => void;
}

export default function ListingCard({
  images,
  title,
  description,
  location,
  country,
  distance,
  dateRange,
  price,
  rating,
  reviews,
  liked = false,
  onPress,
  onFavoritePress,
}: ListingCardProps) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  return (
    <View
      style={[
        styles.card,
        { width: CARD_WIDTH },
      ]}
    >
      {/* IMAGE CAROUSEL */}
      <View style={styles.imageWrapper}>
        <Carousel
          loop={false}
          width={CARD_WIDTH}
          height={IMAGE_HEIGHT}
          data={images}
          pagingEnabled
          snapEnabled
          enabled={images.length > 1}
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

        {/* FAVORITE */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.favoriteButton}
          onPress={onFavoritePress}
        >
          <Ionicons
            name={
              liked
                ? 'heart'
                : 'heart-outline'
            }
            size={22}
            color={
              liked
                ? colors.primary
                : '#FFFFFF'
            }
          />
        </TouchableOpacity>

        {/* DOTS */}
        {images.length > 1 && (
          <View style={styles.pagination}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  activeIndex === index &&
                    styles.activeDot,
                ]}
              />
            ))}
          </View>
        )}
      </View>

      {/* CONTENT */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
      >
        <View style={styles.content}>
            <PrimaryText title={title} size={20} />
            {description && (
             <SecondaryText title={description} size={14} style={{ marginVertical: 6 }} />
            )}
          <View style={styles.row}>
           <PrimaryText
              title={`${location}, ${country}`}
            />

            <View
              style={styles.ratingContainer}
            >
              <Ionicons
                name="star"
                size={14}
                color="#000"
              />

              <SecondaryText
                title={`${rating} (${reviews})`}
              />
            </View>
          </View>

          <Text style={styles.secondaryText}>
            {distance}
          </Text>

          <Text style={styles.secondaryText}>
            {dateRange}
          </Text>

          <View style={styles.priceRow}>
            <Text style={styles.priceText}>
              ${price}
            </Text>

            <Text style={styles.nightText}>
              {' '}
              night
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 24,
  },

  imageWrapper: {
    width: '100%',
    height: IMAGE_HEIGHT,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  favoriteButton: {
    position: 'absolute',
    top: 14,
    right: 14,
    zIndex: 100,
    width: 36,
    height: 36,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      'rgba(0,0,0,0.15)',
  },

  pagination: {
    position: 'absolute',
    bottom: 14,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 20,
    backgroundColor:
      'rgba(255,255,255,0.5)',
    marginHorizontal: 3,
  },

  activeDot: {
    width: 7,
    height: 7,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingTop: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  locationText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginRight: 10,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:5
  },

  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },

  secondaryText: {
    marginTop: 4,
    fontSize: 15,
    color: colors.textSecondary,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  priceText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },

  nightText: {
    fontSize: 16,
    color: colors.text,
  },
});