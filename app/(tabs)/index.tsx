import { getAllListing } from "@/api/listings";
import ListingCard from "@/src/components/ListingCard";
import SearchBar from "@/src/components/SearchBar";
import TopTabs, { TopbarTab } from "@/src/components/TopTabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { listingsType } from "@/api/listings";
export type RootStackParamList = {
  propertyDetails: { location: string };
};

// const fetchListings=async ()=>{
//   const res=await fetch("http//localhost:3000");
//   return res.json();
// }
export default function Index() {
  const [listingData, setListingData] = useState<listingsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListingData = async () => {
      setIsLoading(true);
      try {
        const result = await getAllListing();
        setTimeout(() => {
          setListingData(result);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.log(error, "listing error");
        setIsLoading(false);
      }
    };
    fetchListingData();
  }, []);

  // const {data,isLoading,error}=useQuery({
  //   queryKey:["listings"],
  //   queryFn:fetchListings,
  // })
  const [activeTab, setActiveTab] = useState<string | number>("1");
  // const navigation = useNavigation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  console.log(listingData, "data");
  const datas = [
    {
      title: "Beautiful Beachfront Villa",
      location: "Abiansemal",
      country: "Indonesia",
      distance: "1,669 kilometers",
      dateRange: "Jul 2 - 7",
      price: 360,
      rating: 4.87,
      reviews: 71,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
      ],
    },
    {
      title: "Cozy Mountain Cabin",
      location: "Ubud",
      country: "Indonesia",
      distance: "1,669 kilometers",
      dateRange: "Jul 2 - 7",
      price: 360,
      rating: 4.87,
      reviews: 71,
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      ],
    },
    {
      title: "Modern City Apartment",
      location: "Canggu",
      country: "Indonesia",
      distance: "1,669 kilometers",
      dateRange: "Jul 2 - 7",
      price: 360,
      rating: 4.87,
      reviews: 71,
      images: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      ],
    },
  ];
  const MOCK_CATEGORIES: TopbarTab[] = [
    { id: "1", title: "Apartments" },
    { id: "2", title: "House" },
    { id: "3", title: "Villa" },
    { id: "4", title: "Restaurants" },
    { id: "5", title: "Sports" },
    { id: "6", title: "Fashion" },
    { id: "7", title: "Finance" },
  ];
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error:{error}</Text>;

  return (
    <SafeAreaView style={[styles.container, { paddingTop: 12 }]}>
      <SearchBar />
      <TopTabs
        tabs={MOCK_CATEGORIES}
        activeTabId={activeTab}
        onTabPress={(id) => setActiveTab(id)}
        activeColor="#FF3B30"
      />
      <FlatList
        data={listingData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListingCard
            title={item.title}
            images={item.images || []}
            location={item.location || ""}
            country={item.country || ""}
            distance={item.distance || ""}
            dateRange={item.dateRange || ""}
            price={item.pricePerNight || 0}
            rating={item.rating || 0}
            reviews={item.reviews || 0}
            onPress={() =>
              navigation.navigate("propertyDetails", {
                location: item.location,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
