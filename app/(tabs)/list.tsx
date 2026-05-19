import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "expo-router";
import ListingCard from "@/src/components/ListingCard";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather, Ionicons } from "@expo/vector-icons";
import { goBack } from "expo-router/build/global-state/routing";
import { globalStyles } from "@/src/styles/globalStyles";
export type RootStackParamList = {
  loginScreen:undefined;
  signupScreen:undefined;
  propertyDetails: { location: string };
};

export default function List() {
    // const navigation = useNavigation();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const data=[
    {
      title: 'Beautiful Beachfront Villa',
      description: 'Experience the ultimate beachfront getaway in this stunning villa with breathtaking ocean views, private pool, and direct beach access.',
      location: 'Abiansemal',
      country: 'Indonesia',
      distance: '1,669 kilometers',
      dateRange: 'Jul 2 - 7',
      price: 360,
      rating: 4.87,
      reviews: 71,
      images: [
        'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1494526585095-c41746248156',
      ],
    },
    {
      title: 'Cozy Mountain Cabin',
      location: 'Ubud',
      country: 'Indonesia',
      distance: '1,669 kilometers',
      dateRange: 'Jul 2 - 7',
      price: 360,
      rating: 4.87,
      reviews: 71,
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      ],
    },
    {
      title: 'Modern City Apartment',
      location: 'Canggu',
      country: 'Indonesia',
      distance: '1,669 kilometers',
      dateRange: 'Jul 2 - 7',
      price: 360,
      rating: 4.87,
      reviews: 71,
      images: [
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      ],
    }
  ]
  return (
    <SafeAreaView  style={globalStyles.container}>
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
      <FlatList data={data} renderItem={({ item }) => (
        <ListingCard
        title={item.title}
          images={item.images}
          location={item.location}
          country={item.country}
          distance={item.distance}
          dateRange={item.dateRange}
          price={item.price}
          rating={item.rating}
          reviews={item.reviews}
          description={item.description}
          liked={true}
          onPress={() => navigation.navigate('propertyDetails', { location: item.location })}
        />
      )} />
    </SafeAreaView >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
   topActions: {
    marginVertical: 15,
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
});
