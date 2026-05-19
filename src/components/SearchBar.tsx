import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../styles/globalStyles";
const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color={colors.text} />
      <TextInput
        style={styles.searchBar}
        placeholder="Any where.Any Week"
        value={search}
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default SearchBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 55,
    borderWidth: 0.5,
    borderColor: "#D8DCE0",
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    shadowColor:"#0000001F",
    elevation: 5,
  },
  searchBar: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginRight:20,
    marginTop:10,
    marginLeft:5,
  },
});
