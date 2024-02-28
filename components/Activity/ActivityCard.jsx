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
      <Text style={styles.tabHeader}>Activities</Text>
      {chosenTrip.activities.map((activityItem) => {
        return (
          <View key={activityItem._id} style={styles.item}>
            <Text style={styles.cardText}>
              <View style={styles.cardTitle}>Name: </View>
              {activityItem.name}
            </Text>
            <Text style={styles.cardText}>
              <View style={styles.cardTitle}>Date: </View>
              {activityItem.startdate}
            </Text>
            <Text style={styles.cardText}>
              <View style={styles.cardTitle}>Info: </View>
              {activityItem.info}
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => showEditForm(activityItem._id)}
              >
                <Text style={styles.btnText}>EDIT</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() =>
                  handleActivityDelete(chosenTrip._id, activityItem._id)
                }
              >
                <Text style={styles.btnText}>DELETE</Text>
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
