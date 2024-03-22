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
              <Text style={styles.cardTitle}>Check-In: </Text>
              {stayItem.startdate}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Check-Out: </Text>
              {stayItem.enddate}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Name: </Text>
              {stayItem.name}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Type: </Text>
              {stayItem.type}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.cardTitle}>Info: </Text>
              {stayItem.info}
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => showEditForm(stayItem._id)}
              >
                <Text style={styles.btnText}>EDIT</Text>
              </Pressable>
              <Pressable
                style={styles.deleteBtn}
                onPress={() => handleStayDelete(chosenTrip._id, stayItem._id)}
              >
                <Text style={styles.deleteBtnText}>DELETE</Text>
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
    borderColor: "#263D42",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#FBFAF8",
  },
  tabHeader: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    color: "#2D7638",
    // textShadowColor: "#B2A59B",
    // textShadowOffset: { width: 2, height: 3 },
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
  },
  deleteBtn: {
    // borderColor: "#423219",
    // borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#263D42",
    alignSelf: "flex-start",
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
