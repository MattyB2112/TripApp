import { Text, StyleSheet, View } from "react-native";

export default function TripNameHeader({ formatDate, chosenTrip }) {
  return (
    <View style={styles.TripNameContainer}>
      <View style={styles.tripName}>{chosenTrip.name}</View>

      <View style={styles.tripDates}>{formatDate(chosenTrip.startdate)} - {formatDate(chosenTrip.enddate)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  TripNameContainer: {
    fontSize: 20,
    fontFamily: "sans-serif",
  },
  tripName: {
    alignItems: "center",
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    paddingTop: 15,
    textShadowColor: "#B2A59B",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 4,
  },
  tripDates: {
    alignItems: "center",
    fontSize: 15,
    color: "#263D42",
    paddingTop: 10,
    paddingBottom: 20,
  },
});
