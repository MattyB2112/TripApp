import { View, Text, StyleSheet, Pressable } from "react-native";
import { deleteTravel } from "../../api";
import { useState } from "react";
import TravelEditor from "./TravelEditor";

export default function TravelCard({ chosenTrip, setModifyTrip }) {
  const [showForm, setShowForm] = useState(false);
  const [currentlyEditing, setCurrentlyEditing] = useState("");
  function showEditForm(travel_id) {
    setShowForm(true);
    setCurrentlyEditing(travel_id);
  }
  function handleTravelDelete(trip_id, travel_id) {
    deleteTravel(trip_id, travel_id).then((response) => {
      setModifyTrip(true);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tabHeader}>Travel</Text>
      {chosenTrip.travel.map((travelItem) => {
        return (
          <View key={travelItem._id} style={styles.item}>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Departure Date: </Text>
              {travelItem.startdate}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Departure Time: </Text>
              {travelItem.leavetime}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Arrival Date: </Text>
              {travelItem.arrivedate}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Arrival Time: </Text>
              {travelItem.arrivetime}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Type: </Text>
              {travelItem.type}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Info: </Text>
              {travelItem.info}
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => showEditForm(travelItem._id)}
              >
                <Text style={styles.btnText}>EDIT</Text>
              </Pressable>
              <Pressable
                style={styles.deleteBtn}
                onPress={() => {
                  handleTravelDelete(chosenTrip._id, travelItem._id);
                }}
              >
                <Text style={styles.deleteBtnText}>DELETE</Text>
              </Pressable>
            </View>
            {showForm && currentlyEditing === travelItem._id ? (
              <TravelEditor
                chosenTrip={chosenTrip}
                setModifyTrip={setModifyTrip}
                setShowForm={setShowForm}
                travel_id={travelItem._id}
              />
            ) : null}
          </View>
        );
      })}
    </ View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    // height: "100%"
    // alignItems: "center"
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 0,
    borderColor: "#263D42",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#FBFAF8",
    // height: 200,
    // width: "90%"
  },
  tabHeader: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    color: "#2D7638",
    // textShadowColor: "#B2A59B",
    // textShadowOffset: {width: 2, height: 3 },
    // textShadowRadius: 4,
  },
  buttonContainer: {
    marginTop: 5,
    flex: 0.1,
    gap: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    // borderColor: "#423219",
    // borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#9A7AA0",
    alignSelf: "flex-start",
    // height: 25
  },
  deleteBtn: {
    // borderColor: "#423219",
    // borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#263D42",
    alignSelf: "flex-start",
    // height: 25
  },
  deleteBtnText: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#FBFAF8",
    lineHeight: 15,
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#FBFAF8",
    lineHeight: 15,
  },
  cardText: {
    // fontWeight: "bold",
    fontSize: 15,
    color: "black",
    lineHeight: 20,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#263D42",
  },
});
