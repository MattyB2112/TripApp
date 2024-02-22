import { View, Text, StyleSheet } from "react-native";

export default function TravelCard({ chosenTrip }) {
  console.log(chosenTrip);
  return (
    <View style={styles.container}>
      <Text>Travel</Text>
      {chosenTrip[0].travel.map((travelItem) => {
        return (
          <View key={travelItem.startdate} style={styles.item}>
            <Text>Start date: {travelItem.startdate}</Text>
            <Text>Leave time: {travelItem.leavetime}</Text>
            <Text>Arrive date: {travelItem.arrivedate}</Text>
            <Text>Arrive time: {travelItem.arrivetime}</Text>
            <Text>Type: {travelItem.type}</Text>
            <Text>Info : {travelItem.info}</Text>
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
