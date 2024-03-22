import { Text, StyleSheet, View } from "react-native";

export default function TripNameHeader({ formatDate, chosenTrip }) {
  return (
    <View style={styles.TripNameContainer}>
      <Text style={styles.tripName}>{chosenTrip.name}</Text>
      <Text style={styles.tripDates}>
        {formatDate(chosenTrip.startdate)} - {formatDate(chosenTrip.enddate)}
      </Text>
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
    color: "#263D42",
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 15,
    // textShadowColor: "#B2A59B",
    // textShadowOffset: { width: 2, height: 3 },
    // textShadowRadius: 4,
  },
  tripDates: {
    alignItems: "center",
    fontSize: 15,
    color: "black",
    paddingTop: 10,
    paddingBottom: 20,
  },
});
