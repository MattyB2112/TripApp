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

export default function TravelAdder({ chosenTrip }) {
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
    const { startdate, leavetime, arrivedate, arrivetime, type, info } =
      newTravel;

    console.log(chosenTrip, "<---- TRIP");
    console.log(newTravel, "<--- NEW TRAVEL TO ADD");

    postTravel(
      chosenTrip,
      startdate,
      leavetime,
      arrivedate,
      arrivetime,
      type,
      info
    ).then(() => {
      setNewTravel((currentTravel) => {
        return {
          ...currentTravel,
          startdate: currentTravel.startDate,
          leavetime: currentTravel.leaveTime,
          arrivedata: currentTravel.arriveDate,
          arrivetime: currentTravel.arriveTime,
          type: currentTravel.type,
          info: currentTravel.info,
        };
      });
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
            <Text>START DATE:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTravelStartDateInput}
            />
            <Text>LEAVE TIME:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTravelLeaveTimeInput}
            />
            <Text>ARRIVE DATE:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTravelArriveDateInput}
            />
            <Text>ARRIVE TIME:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTravelArriveTimeInput}
            />
            <Text>TRAVEL TYPE:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTravelTypeInput}
            />
            <Text>INFO:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleTravelInfoInput}
            />

            {/* Add Travel Button */}
            <Pressable style={styles.addTravelBtn} onPress={handleSubmitTravel}>
              <Text style={styles.addTravelText}>SUBMIT TRAVEL!</Text>
            </Pressable>
          </>
        )}

        {showAddBtn && (
          <Pressable style={styles.addTravelBtn} onPress={handleAddBtn}>
            <Text style={styles.addTravelText}>ADD TRAVEL!</Text>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#D7CCB2",
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
  setDateBtn: {
    alignSelf: "center",
    alignItems: "center",
    width: "30%",
    borderColor: "#423219",
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 5,
  },
  setDateText: {
    fontWeight: "bold",
    fontSize: 10,
  },
  addTravelBtn: {
    backgroundColor: "#423219",
    alignSelf: "center",
    alignItems: "center",
    width: "30%",
    borderColor: "#291E0E",
    borderWidth: 3,
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 5,
  },
  addTravelText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#096502",
  },
});
