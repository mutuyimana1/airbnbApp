import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '@/src/styles/globalStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ExperienceItem, Reservation } from '@/src/components/types/types';
import PrimaryText from '@/src/components/UI/PrimaryText';
import SecondaryText from '@/src/components/UI/SecondaryText';
import { ImageCarousel } from '@/src/components/UI/ImageCarousel';

const MOCK_RESERVATION: Reservation = {
  id: 'res-1',
   images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1494526585095-c41746248156',
      ],
  status: 'Pending',
  title: 'Yonkers',
  hostDescription: 'Private room in home hosted by Craig',
  dateRange: 'Feb 13 - 14',
  year: '2023',
  location: 'Yonkers, New York',
  country: 'United States',
};

const MOCK_EXPERIENCES: ExperienceItem[] = [
  { id: 'exp-1', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945', title: 'Just for you', subtitle: '18 experiences' },
  { id: 'exp-2', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85', title: 'Food & Dining', subtitle: '24 experiences' },
];

const Trips = () => {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <PrimaryText title="Trips" size={30}/>
      <SecondaryText title='Upcoming Reservations' size={20}/>
     <View style={styles.cardContainer}>
          {/* Top Carousel Image Display Container */}
          <View style={styles.carouselWrapper}>
            <ImageCarousel images={MOCK_RESERVATION.images} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{MOCK_RESERVATION.status}</Text>
            </View>
          </View>

          {/* Bottom Descriptive Information Fields */}
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>{MOCK_RESERVATION.title}</Text>
            <Text style={styles.cardSubtitle}>{MOCK_RESERVATION.hostDescription}</Text>
            
            <View style={styles.divider} />
            
            <View style={styles.metaRow}>
              <View style={styles.dateBlock}>
                <Text style={styles.dateText}>{MOCK_RESERVATION.dateRange}</Text>
                <Text style={styles.yearText}>{MOCK_RESERVATION.year}</Text>
              </View>
              <View style={styles.verticalDivider} />
              <View style={styles.locationBlock}>
                <Text style={styles.locationText}>{MOCK_RESERVATION.location}</Text>
                <Text style={styles.countryText}>{MOCK_RESERVATION.country}</Text>
              </View>
            </View>
          </View>
        </View>
         <Text style={styles.sectionHeading}>Explore things to do near {MOCK_RESERVATION.title}</Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalListPadding}>
          {MOCK_EXPERIENCES.map((item) => (
            <TouchableOpacity key={item.id} style={styles.experienceItem} activeOpacity={0.8}>
              <Image source={{ uri: item.image }} style={styles.experienceImage} />
              <View style={styles.experienceDetails}>
                <Text style={styles.experienceTitle}>{item.title}</Text>
                <Text style={styles.experienceSubtitle}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

    </SafeAreaView>
  )
}

export default Trips

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingVertical: 24,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  cardContainer: {
    marginHorizontal: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 24,
    marginTop:10
  },
  carouselWrapper: {
    position: 'relative',
    overflow: 'hidden',
  },
  badge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#FFFFFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222222',
  },
  cardDetails: {
    padding: 24,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 15,
    color: '#717171',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    marginBottom: 16,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateBlock: {
    width: '30%',
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
  },
  yearText: {
    fontSize: 14,
    color: '#717171',
    marginTop: 2,
  },
  verticalDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#EAEAEA',
    marginHorizontal: 16,
  },
  locationBlock: {
    flex: 1,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
  },
  countryText: {
    fontSize: 14,
    color: '#717171',
    marginTop: 2,
  },
  horizontalListPadding: {
    paddingHorizontal: 16,
    gap: 12,
  },
  experienceItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    width: 260,
    height: 70,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    overflow: 'hidden',
    alignItems: 'center',
  },
  experienceImage: {
    width: 70,
    height: 70,
  },
  experienceDetails: {
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  experienceTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222222',
  },
  experienceSubtitle: {
    fontSize: 13,
    color: '#717171',
    marginTop: 2,
  },
});