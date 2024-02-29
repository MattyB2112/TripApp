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
import { postActivity } from "../../api.js";

export default function ActivityAdder({ chosenTrip, setModifyTrip }) {
  const [showForm, setShowForm] = useState(false);
  const [showAddBtn, setShowAddBtn] = useState(true);

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [info, setInfo] = useState("");

  const [newActivity, setNewActivity] = useState({});

  function handleActivityStartDateInput(text) {
    setStartDate(text);
    setNewActivity((currentActivityToAdd) => ({
      ...currentActivityToAdd,
      startdate: text,
    }));
  }

  function handleActivityNameInput(text) {
    setName(text);
    setNewActivity((currentActivityToAdd) => ({
      ...currentActivityToAdd,
      name: text,
    }));
  }

  function handleActivityInfoInput(text) {
    setInfo(text);
    setNewActivity((currentActivityToAdd) => ({
      ...currentActivityToAdd,
      info: text,
    }));
  }

  function handleSubmitActivity() {
    postActivity(chosenTrip._id, newActivity).then(() => {
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
        {showForm && (
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

            <Pressable
              style={styles.addActivityBtn}
              onPress={handleSubmitActivity}
            >
              <Text style={styles.addActivityText}>SUBMIT ACTIVITY!</Text>
            </Pressable>
          </>
        )}

        {showAddBtn && (
          <Pressable style={styles.addActivityBtn} onPress={handleAddBtn}>
            <Text style={styles.addActivityText}>ADD ACTIVITY</Text>
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
    // borderColor: "#291E0E",
    // borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    // backgroundColor: "#423219",
    // alignSelf: "center",
    // alignItems: "center",
    // borderColor: "#291E0E",
    // borderWidth: 3,
    // borderRadius: 5,
    // padding: 10,
    // marginTop: 15,
  },
  addActivityText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FBFAF8",
  },
});
