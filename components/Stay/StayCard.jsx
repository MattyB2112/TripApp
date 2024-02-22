import { View, Text, StyleSheet } from "react-native";

export default function StayCard({ chosenTrip }) {
  return (
    <View style={styles.container}>
      <Text>Stay</Text>
      {chosenTrip[0].stay.map((stayItem) => {
        return (
          <View key={stayItem.startdate} style={styles.item}>
            <Text>Start date: {stayItem.startdate}</Text>
            <Text>End time: {stayItem.enddate}</Text>
            <Text>Type: {stayItem.type}</Text>
            <Text>Info : {stayItem.info}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
    borderColor: "#423219",
    borderWidth: 2,
    borderRadius: 5,
  },
});
