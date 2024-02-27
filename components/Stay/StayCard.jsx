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
      <Text>Stay</Text>
      {chosenTrip.stay.map((stayItem) => {
        return (
          <View key={stayItem._id} style={styles.item}>
            <Text>Start date: {stayItem.startdate}</Text>
            <Text>End time: {stayItem.enddate}</Text>
            <Text>Type: {stayItem.type}</Text>
            <Text>Info : {stayItem.info}</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => showEditForm(stayItem._id)}
              >
                <Text>Edit</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => handleStayDelete(chosenTrip._id, stayItem._id)}
              >
                <Text>Delete</Text>
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
