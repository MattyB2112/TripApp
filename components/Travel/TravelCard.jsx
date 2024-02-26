import { View, Text, StyleSheet, Pressable } from "react-native";
import { deleteTravel } from "../../api";

export default function TravelCard({ chosenTrip, setModifyTrip }) {
  console.log(chosenTrip);
  function handleTravelDelete(trip_id, travel_id) {
    console.log(trip_id);
    console.log(travel_id);
    deleteTravel(trip_id, travel_id).then((response) => {
      setModifyTrip(true);
    });
  }

  return (
    <View style={styles.container}>
      <Text>Travel</Text>
      {chosenTrip.travel.map((travelItem) => {
        return (
          <View key={travelItem._id} style={styles.item}>
            <Text>Start date: {travelItem.startdate}</Text>
            <Text>Leave time: {travelItem.leavetime}</Text>
            <Text>Arrive date: {travelItem.arrivedate}</Text>
            <Text>Arrive time: {travelItem.arrivetime}</Text>
            <Text>Type: {travelItem.type}</Text>
            <Text>Info : {travelItem.info}</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button}>
                <Text>Edit</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => {
                  handleTravelDelete(chosenTrip._id, travelItem._id);
                }}
              >
                <Text>Delete</Text>
              </Pressable>
            </View>
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
  buttonContainer: {
    marginTop: 5,
    flex: 1,
    gap: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    borderColor: "#423219",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  },
});
