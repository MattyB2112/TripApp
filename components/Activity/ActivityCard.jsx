import { View, Text, StyleSheet } from "react-native";

export default function ActivityCard({ chosenTrip }) {
  console.log(chosenTrip[0].activities);
  return (
    <View style={styles.container}>
      <Text>Activities</Text>
      {chosenTrip[0].activities.map((activityItem) => {
        return (
          <View key={activityItem.name} style={styles.item}>
            <Text>{activityItem.name}</Text>
            <Text>{activityItem.startdate}</Text>
            <Text>{activityItem.info}</Text>
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
