import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { deleteActivity } from "../../api";
import ActivityEditor from "./ActivityEditor";

export default function ActivityCard({ chosenTrip, setModifyTrip }) {
  const [showForm, setShowForm] = useState(false);
  const [currentlyEditing, setCurrentlyEditing] = useState("");

  function showEditForm(activity_id) {
    setShowForm(true);
    setCurrentlyEditing(activity_id);
  }

  function handleActivityDelete(trip_id, activity_id) {
    console.log(trip_id, activity_id);
    deleteActivity(trip_id, activity_id).then((response) => {
      setModifyTrip(true);
    });
  }
  return (
    <View style={styles.container}>
      <Text>Activities</Text>
      {chosenTrip.activities.map((activityItem) => {
        return (
          <View key={activityItem._id} style={styles.item}>
            <Text>{activityItem.name}</Text>
            <Text>{activityItem.startdate}</Text>
            <Text>{activityItem.info}</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => showEditForm(activityItem._id)}
              >
                <Text>Edit</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() =>
                  handleActivityDelete(chosenTrip._id, activityItem._id)
                }
              >
                <Text>Delete</Text>
              </Pressable>
            </View>
            {showForm && currentlyEditing === activityItem._id ? (
              <ActivityEditor
                chosenTrip={chosenTrip}
                setModifyTrip={setModifyTrip}
                setShowForm={setShowForm}
                activity_id={activityItem._id}
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
