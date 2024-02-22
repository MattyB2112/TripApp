import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>TripApp</Text>
      <Pressable style={styles.tripsButton}>
        <Text style={styles.tripsButton}>MY TRIPS</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "#332003",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },
  tripsButton: {
    color: "#B2CCE4",
    textAlign: "right",
    fontSize: 20,
    fontFamily: "sans-serif",
    marginRight: 10,
    marginTop: -10,
  },
});
