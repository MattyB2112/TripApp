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

import { patchTravel } from "../../api";

export default function TravelEditor({
  chosenTrip,
  setModifyTrip,
  setShowForm,
  travel_id,
}) {
  const [startDate, setStartDate] = useState("");
  const [leaveTime, setLeaveTime] = useState("");
  const [arriveDate, setArriveDate] = useState("");
  const [arriveTime, setArriveTime] = useState("");
  const [travelType, setTravelType] = useState("");
  const [info, setInfo] = useState("");

  const [patchedTravel, setPatchedTravel] = useState({});

  function handleTravelStartDateInput(text) {
    setStartDate(text);
    setPatchedTravel((currentPatchedTravel) => ({
      ...currentPatchedTravel,
      startdate: text,
    }));
  }

  function handleTravelLeaveTimeInput(text) {
    setLeaveTime(text);
    setPatchedTravel((currentPatchedTravel) => ({
      ...currentPatchedTravel,
      leavetime: text,
    }));
  }

  function handleTravelArriveDateInput(text) {
    setArriveDate(text);
    setPatchedTravel((currentPatchedTravel) => ({
      ...currentPatchedTravel,
      arrivedate: text,
    }));
  }

  function handleTravelArriveTimeInput(text) {
    setArriveTime(text);
    setPatchedTravel((currentPatchedTravel) => ({
      ...currentPatchedTravel,
      arrivetime: text,
    }));
  }

  function handleTravelTypeInput(text) {
    setTravelType(text);
    setPatchedTravel((currentPatchedTravel) => ({
      ...currentPatchedTravel,
      type: text,
    }));
  }

  function handleTravelInfoInput(text) {
    setInfo(text);
    setPatchedTravel((currentPatchedTravel) => ({
      ...currentPatchedTravel,
      info: text,
    }));
  }

  function handleSubmitTravel() {
    patchTravel(chosenTrip._id, travel_id, patchedTravel).then(() => {
      setModifyTrip(true);
    });

    setShowForm(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Travel Name Input */}
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
          <View style={styles.formBtnContainer}>
            {/* Add Travel Button */}
            <Pressable style={styles.addTravelBtn} onPress={handleSubmitTravel}>
              <Text style={styles.addTravelText}>CONFIRM</Text>
            </Pressable>
            {/*Cancel form button */}
            <Pressable
              style={styles.cancelTravelBtn}
              onPress={() => setShowForm(false)}
            >
              <Text style={styles.cancelTravelText}>CANCEL</Text>
            </Pressable>
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 50,
    backgroundColor: "#FBFAF8",
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
    // width: "30%",
    // borderColor: "#291E0E",
    // borderWidth: 3,
    borderRadius: 5,
    // paddingVertical: 10,
    marginVertical: 5,
    padding: 5,
  },
  addTravelText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FBFAF8",
  },
  cancelTravelBtn: {
    backgroundColor: "#263D42",
    alignSelf: "center",
    alignItems: "center",
    // width: "30%",
    // borderColor: "#291E0E",
    // borderWidth: 3,
    borderRadius: 5,
    // paddingVertical: 10,
    marginVertical: 5,
    padding: 5,
  },
  cancelTravelText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FBFAF8",
  },
  formBtnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});
