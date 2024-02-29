import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { postTravel } from "../../api.js";

export default function TravelAdder({ chosenTrip, setModifyTrip }) {
  const [showForm, setShowForm] = useState(false);
  const [showAddBtn, setShowAddBtn] = useState(true);

  const [startDate, setStartDate] = useState("");
  const [leaveTime, setLeaveTime] = useState("");
  const [arriveDate, setArriveDate] = useState("");
  const [arriveTime, setArriveTime] = useState("");
  const [travelType, setTravelType] = useState("");
  const [info, setInfo] = useState("");

  const [newTravel, setNewTravel] = useState({});

  function handleTravelStartDateInput(text) {
    setStartDate(text);
    setNewTravel((currentTravelToAdd) => ({
      ...currentTravelToAdd,
      startdate: text,
    }));
  }

  function handleTravelLeaveTimeInput(text) {
    setLeaveTime(text);
    setNewTravel((currentTravelToAdd) => ({
      ...currentTravelToAdd,
      leavetime: text,
    }));
  }

  function handleTravelArriveDateInput(text) {
    setArriveDate(text);
    setNewTravel((currentTravelToAdd) => ({
      ...currentTravelToAdd,
      arrivedate: text,
    }));
  }

  function handleTravelArriveTimeInput(text) {
    setArriveTime(text);
    setNewTravel((currentTravelToAdd) => ({
      ...currentTravelToAdd,
      arrivetime: text,
    }));
  }

  function handleTravelTypeInput(text) {
    setTravelType(text);
    setNewTravel((currentTravelToAdd) => ({
      ...currentTravelToAdd,
      type: text,
    }));
  }

  function handleTravelInfoInput(text) {
    setInfo(text);
    setNewTravel((currentTravelToAdd) => ({
      ...currentTravelToAdd,
      info: text,
    }));
  }

  function handleSubmitTravel() {
    postTravel(chosenTrip._id, newTravel).then(() => {
      setModifyTrip(true);
    });

    setShowForm(false);
    setShowAddBtn(true);
  }

  function handleAddBtn() {
    setShowForm(true);
    setShowAddBtn(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Travel Name Input */}
        {showForm && (
          <>
            <Text>Departure Date:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTravelStartDateInput}
            />
            <Text>Departure Time:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTravelLeaveTimeInput}
            />
            <Text>Arrival Date:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTravelArriveDateInput}
            />
            <Text>Arrival Time:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTravelArriveTimeInput}
            />
            <Text>Type:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTravelTypeInput}
            />
            <Text>Info:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTravelInfoInput}
            />

            {/* Add Travel Button */}
            <Pressable style={styles.addTravelBtn} onPress={handleSubmitTravel}>
              <Text style={styles.addTravelText}>SUBMIT TRAVEL</Text>
            </Pressable>
          </>
        )}

        {showAddBtn && (
          <Pressable style={styles.addTravelBtn} onPress={handleAddBtn}>
            <Text style={styles.addTravelText}>ADD TRAVEL</Text>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    padding: 50,
    backgroundColor: "#F8F1FF",
    // borderRadius: 5,
    // borderColor: "#263D42",
    // borderWidth: 2,
  },
  textInput: {
    backgroundColor: "white",
    color: "black",
    borderColor: "#423219",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    width: "80%",
    alignSelf: "center",
  },
  addTravelBtn: {
    backgroundColor: "#9A7AA0",
    alignSelf: "center",
    alignItems: "center",
    // borderColor: "#291E0E",
    // borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
  },
  addTravelText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FBFAF8",
  },
});
