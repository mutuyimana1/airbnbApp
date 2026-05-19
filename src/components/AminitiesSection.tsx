// components/AmenitiesSection.tsx

import React from "react";
import { StyleSheet, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { colors } from "../styles/globalStyles";
import AppButton from "./AppButtons";
import GeneralList from "./UI/GeneralList";
import PrimaryText from "./UI/PrimaryText";

interface AmenitiesSectionProps {
  amenities: {
    icon: string;
    title: string;
  }[];
}

export default function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case "water":
        return <Ionicons name="water-outline" size={22} color="#000" />;

      case "kitchen":
        return (
          <MaterialCommunityIcons
            name="silverware-fork-knife"
            size={22}
            color="#000"
          />
        );

      case "wifi":
        return <Ionicons name="wifi-outline" size={22} color="#000" />;

      case "car":
        return <Ionicons name="car-outline" size={22} color="#000" />;

      case "snow":
        return <Ionicons name="snow-outline" size={22} color="#000" />;

      default:
        return <Ionicons name="checkmark-outline" size={22} color="#000" />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.divider} />

      <PrimaryText title="What we offer in this place" size={25} />
      <View style={styles.list}>
        <GeneralList data={amenities} />
      </View>

      <AppButton
        title="Show all 52 amenities"
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 10,
    paddingBottom: 40,
  },

  divider: {
    height: 1,
    backgroundColor: "#E8E8E8",
    marginBottom: 28,
  },

  list: {
    marginVertical: 14,
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  itemText: {
    marginLeft: 16,
    fontSize: 17,
    color: colors.text,
  },

  button: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#000",
  },

  buttonText: {
    color: "#000",
    fontWeight: "600",
  },
});
