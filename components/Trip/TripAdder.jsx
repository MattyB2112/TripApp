import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from "react-native";
import DatePicker from "@dietime/react-native-date-picker";

export default function TripAdder() {
  const [newTrip, setNewTrip] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [showPicker, setShowPicker] = useState(false);

  const loggedInUser = "Jenny";

  const tripToAdd = {
    _id: "8549495e9434352fg234",
    name: "Bogota",
    startdate: "2024-04-26T12:30:59.657+00:00",
    enddate: "2024-05-27T21:00:59.657+00:00",
    admin: loggedInUser,
  };

  const currentYear = new Date().getFullYear();

  function handlePress() {
    setNewTrip(newTrip);
    console.log(newTrip);
  }

  return (
    <ScrollView style={styles.container} behavior="padding">
      <KeyboardAvoidingView>
        <View>
          <Text style={styles.inputHeader}>Trip Name</Text>
          <TextInput style={styles.textInput} />
        </View>

        <View>
          <Pressable onPress={setShowPicker}>
            <Text style={styles.inputHeader}> Set Start Date</Text>
          </Pressable>

          {showPicker && (
            <DatePicker
              value={startDate}
              onChange={(value) => setStartDate(value)}
              format="dd-mm-yyyy"
              startYear={currentYear}
              endYear={currentYear + 50}
              fontSize={15}
            />
          )}
          {/* <Pressable>
            {" "}
            <Text>Confirm</Text>{" "}
          </Pressable> */}
        </View>

        <View>
          <Pressable onPress={setShowPicker}>
            <Text style={styles.inputHeader}> Set End Date</Text>
          </Pressable>

          {showPicker && (
            <DatePicker
              value={endDate}
              onChange={(value) => setEndDate(value)}
              format="dd-mm-yyyy"
              startYear={currentYear}
              endYear={currentYear + 50}
              fontSize={15}
            />
          )}
          {/* <Pressable>
            {" "}
            <Text>Confirm</Text>{" "}
          </Pressable> */}
        </View>
        <View>
          <Pressable onPress={handlePress}>
            {" "}
            <Text>Create Trip</Text>{" "}
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputHeader: {
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#D7CCB2",
  },
  textInput: {
    backgroundColor: "#D7CCB2",
    color: "black",
    borderColor: "#423219",
    borderWidth: 2,
    borderRadius: 5,
  },
});
