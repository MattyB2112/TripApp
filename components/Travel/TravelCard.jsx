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
              <View style={styles.cardTitle}>Departure Date: </View>
              {travelItem.startdate}
            </Text>
            <Text style={styles.cardText}>
              <View style={styles.cardTitle}>Departure Time: </View>
              {travelItem.leavetime}
            </Text>
            <Text style={styles.cardText}>
              <View style={styles.cardTitle}>Arrival Date: </View>
              {travelItem.arrivedate}
            </Text>
            <Text style={styles.cardText}>
              <View style={styles.cardTitle}>Arrival Time:</View>
              {travelItem.arrivetime}
            </Text>
            <Text style={styles.cardText}>
              <View style={styles.cardTitle}>Type: </View>
              {travelItem.type}
            </Text>
            <Text style={styles.cardText}>
              <View style={styles.cardTitle}>Info: </View> {travelItem.info}
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => showEditForm(travelItem._id)}
              >
                <Text style={styles.btnText}>EDIT</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => {
                  handleTravelDelete(chosenTrip._id, travelItem._id);
                }}
              >
                <Text style={styles.btnText}>DELETE</Text>
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
    marginTop: 0,
    borderColor: "#423219",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#5D8233",
  },
  tabHeader: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    textShadowColor: "#B2A59B",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 4,
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
    backgroundColor: "#423219",
  },
  btnText: {
    fontFamily: "arial",
    fontWeight: "bold",
    fontSize: 13,
    color: "black",
    lineHeight: 15,
  },
  cardText: {
    fontFamily: "arial",
    fontWeight: "bold",
    fontSize: 15,
    color: "#263D42",
    lineHeight: 20,
  },
  cardTitle: {
    fontSize: 15,
     color: "black",
  },
});
