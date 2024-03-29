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

import { patchStay } from "../../api";

export default function StayEditor({
  chosenTrip,
  setModifyTrip,
  setShowForm,
  stay_id,
}) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("");
  const [stayType, setStayType] = useState("");
  const [info, setInfo] = useState("");

  const [patchedStay, setPatchedStay] = useState({});

  function handleStayStartDateInput(text) {
    setStartDate(text);
    setPatchedStay((currentPatchedStay) => ({
      ...currentPatchedStay,
      startdate: text,
    }));
  }

  function handleStayEndDateInput(text) {
    setEndDate(text);
    setPatchedStay((currentPatchedStay) => ({
      ...currentPatchedStay,
      enddate: text,
    }));
  }

  function handleStayNameInput(text) {
    setName(text);
    setPatchedStay((currentPatchedStay) => ({
      ...currentPatchedStay,
      name: text,
    }));
  }

  function handleStayTypeInput(text) {
    setStayType(text);
    setPatchedStay((currentPatchedStay) => ({
      ...currentPatchedStay,
      type: text,
    }));
  }

  function handleStayInfoInput(text) {
    setInfo(text);
    setPatchedStay((currentPatchedStay) => ({
      ...currentPatchedStay,
      info: text,
    }));
  }

  function handleSubmitStay() {
    patchStay(chosenTrip._id, stay_id, patchedStay).then(() => {
      setModifyTrip(true);
    });

    setShowForm(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      <ScrollView>
        <>
          <Text>Check-In:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleStayStartDateInput}
          />
          <Text>Check-Out:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleStayEndDateInput}
          />
          <Text>Name:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleStayNameInput}
          />
          <Text>Type:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleStayTypeInput}
          />
          <Text>Info:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleStayInfoInput}
          />
          <View style={styles.formBtnContainer}>
            <Pressable style={styles.addStayBtn} onPress={handleSubmitStay}>
              <Text style={styles.addStayText}>CONFIRM</Text>
            </Pressable>

            {/*Cancel form button */}
            <Pressable
              style={styles.cancelStayBtn}
              onPress={() => setShowForm(false)}
            >
              <Text style={styles.cancelStayText}>CANCEL</Text>
            </Pressable>
          </View>
        </>
      </ScrollView>
      {/* </View> */}
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
  addStayBtn: {
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
  addStayText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FBFAF8",
  },
  cancelStayBtn: {
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
  cancelStayText: {
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
