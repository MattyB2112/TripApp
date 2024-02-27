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
import { getUsers, postMember } from "../../api.js";

export default function MemberAdder({ chosenTrip, setModifyTrip }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {}, [users]);

  function handleGetUsersBtn() {
    getUsers().then((userData) => {
      const usersArray = userData.map((user) => user);
      setUsers(usersArray);
    });
  }

  function handleUserBtn({ _id }) {
    console.log(_id, "<-- current user ID");
    postMember(chosenTrip._id, _id).then(() => {
        console.log("hello")
      setModifyTrip(true);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {users.map((user, index) => (
          <Pressable
            key={index}
            style={styles.userBtn}
            onPress={() => handleUserBtn(user)}
          >
            <Text style={styles.userText}>{user.username}</Text>
          </Pressable>
        ))}
        <Pressable style={styles.addMemberBtn} onPress={handleGetUsersBtn}>
          <Text style={styles.addMemberText}>ADD MEMBER!</Text>
        </Pressable>
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
  addMemberBtn: {
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
  addMemberText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#096502",
  },
  userBtn: {
    backgroundColor: "#423219",
    borderColor: "#291E0E",
    borderWidth: 3,
    borderRadius: 5,
  },
  userText: {
    color: "white",
  },
});
