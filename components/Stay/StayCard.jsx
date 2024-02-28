import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { deleteStay } from "../../api";
import StayEditor from "./StayEditor";

export default function StayCard({ chosenTrip, setModifyTrip }) {
  const [showForm, setShowForm] = useState(false);
  const [currentlyEditing, setCurrentlyEditing] = useState("");

  function showEditForm(stay_id) {
    setShowForm(true);
    setCurrentlyEditing(stay_id);
  }

  function handleStayDelete(trip_id, stay_id) {
    deleteStay(trip_id, stay_id).then((response) => {
      setModifyTrip(true);
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.tabHeader}>Stay</Text>
      {chosenTrip.stay.map((stayItem) => {
        return (
          <View key={stayItem._id} style={styles.item}>
            <Text style={styles.cardText}>
              <View style={styles.cardTitle}>Check-In: </View>
              {stayItem.startdate}
            </Text>
            <Text style={styles.cardText}>
              <View style={styles.cardTitle}>Check-Out: </View>
              {stayItem.enddate}
            </Text>
            <Text style={styles.cardText}>
              <View style={styles.cardTitle}>Name: </View> {stayItem.name}
            </Text>
            <Text style={styles.cardText}>
              <View style={styles.cardTitle}>Type: </View> {stayItem.type}
            </Text>
            <Text style={styles.cardText}>
              <View style={styles.cardTitle}>Info: </View> {stayItem.info}
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => showEditForm(stayItem._id)}
              >
                <Text style={styles.btnText}>EDIT</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleStayDelete(chosenTrip._id, stayItem._id)}
              >
                <Text style={styles.btnText}>DELETE</Text>
              </Pressable>
            </View>
            {showForm && currentlyEditing === stayItem._id ? (
              <StayEditor
                chosenTrip={chosenTrip}
                setModifyTrip={setModifyTrip}
                setShowForm={setShowForm}
                stay_id={stayItem._id}
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
