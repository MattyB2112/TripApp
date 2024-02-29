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
import { patchActivity } from "../../api";

export default function ActivityEditor({
  chosenTrip,
  setModifyTrip,
  setShowForm,
  activity_id,
}) {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [info, setInfo] = useState("");

  const [patchedActivity, setPatchedActivity] = useState({});

  function handleActivityStartDateInput(text) {
    setStartDate(text);
    setPatchedActivity((currentPatchedActivity) => ({
      ...currentPatchedActivity,
      startdate: text,
    }));
  }

  function handleActivityNameInput(text) {
    setName(text);
    setPatchedActivity((currentPatchedActivity) => ({
      ...currentPatchedActivity,
      name: text,
    }));
  }

  function handleActivityInfoInput(text) {
    setInfo(text);
    setPatchedActivity((currentPatchedActivity) => ({
      ...currentPatchedActivity,
      info: text,
    }));
  }

  function handleSubmitActivity() {
    patchActivity(chosenTrip._id, activity_id, patchedActivity).then(() => {
      setModifyTrip(true);
    });

    setShowForm(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <>
          <Text>Name:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleActivityNameInput}
          />
          <Text>Date:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleActivityStartDateInput}
          />
          <Text>Info:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleActivityInfoInput}
          />
          <View style={styles.formBtnContainer}>
            <Pressable
              style={styles.addActivityBtn}
              onPress={handleSubmitActivity}
            >
              <Text style={styles.addActivityText}>CONFIRM</Text>
            </Pressable>
            {/*Cancel form button */}
            <Pressable
              style={styles.cancelActivityBtn}
              onPress={() => setShowForm(false)}
            >
              <Text style={styles.cancelActivityText}>CANCEL</Text>
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
  addActivityBtn: {
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
  addActivityText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FBFAF8",
  },
  cancelActivityBtn: {
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
  cancelActivityText: {
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
