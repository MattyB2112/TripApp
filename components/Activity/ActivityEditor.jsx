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
          <Text>NAME:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleActivityNameInput}
          />
          <Text>START DATE:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleActivityStartDateInput}
          />
          <Text>INFO:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleActivityInfoInput}
          />
          <View style={styles.formBtnContainer}>
            <Pressable
              style={styles.addActivityBtn}
              onPress={handleSubmitActivity}
            >
              <Text style={styles.addActivityText}>Confirm</Text>
            </Pressable>
            {/*Cancel form button */}
            <Pressable
              style={styles.addActivityBtn}
              onPress={() => setShowForm(false)}
            >
              <Text style={styles.addActivityText}>Cancel</Text>
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
  addActivityBtn: {
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
  addActivityText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#096502",
  },
  formBtnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});