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
import { postStay } from "../../api.js";

export default function StayAdder({ chosenTrip, setModifyTrip }) {
  const [showForm, setShowForm] = useState(false);
  const [showAddBtn, setShowAddBtn] = useState(true);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("");
  const [stayType, setStayType] = useState("");
  const [info, setInfo] = useState("");

  const [newStay, setNewStay] = useState({});

  function handleStayStartDateInput(text) {
    setStartDate(text);
    setNewStay((currentStayToAdd) => ({
      ...currentStayToAdd,
      startdate: text,
    }));
  }

  function handleStayEndDateInput(text) {
    setEndDate(text);
    setNewStay((currentStayToAdd) => ({
      ...currentStayToAdd,
      enddate: text,
    }));
  }

  function handleStayNameInput(text) {
    setName(text);
    setNewStay((currentStayToAdd) => ({
      ...currentStayToAdd,
      name: text,
    }));
  }

  function handleStayTypeInput(text) {
    setStayType(text);
    setNewStay((currentStayToAdd) => ({
      ...currentStayToAdd,
      type: text,
    }));
  }

  function handleStayInfoInput(text) {
    setInfo(text);
    setNewStay((currentStayToAdd) => ({
      ...currentStayToAdd,
      info: text,
    }));
  }

  function handleSubmitStay() {
    postStay(chosenTrip._id, newStay).then(() => {
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
            <Text>START DATE:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleStayStartDateInput}
            />
            <Text>END DATE:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleStayEndDateInput}
            />
            <Text>NAME:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleStayNameInput}
            />
            <Text>TYPE:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleStayTypeInput}
            />
            <Text>INFO:</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={handleStayInfoInput}
            />

            <Pressable style={styles.addStayBtn} onPress={handleSubmitStay}>
              <Text style={styles.addStayText}>SUBMIT STAY!</Text>
            </Pressable>
          </>
        )}

        {showAddBtn && (
          <Pressable style={styles.addStayBtn} onPress={handleAddBtn}>
            <Text style={styles.addStayText}>ADD STAY!</Text>
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
  addStayBtn: {
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
  addStayText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#096502",
  },
});
