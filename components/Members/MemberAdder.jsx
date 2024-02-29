import React, { useEffect, useState, useContext } from "react";
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
import { UserContext } from "../../contexts/UserContext";

export default function MemberAdder({ chosenTrip, setModifyTrip }) {
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {}, [users]);

  function handleGetUsersBtn() {
    getUsers().then((userData) => {
      const usersArray = userData.map((user) => user);
      setUsers(usersArray);
      setShowForm(true);
    });
  }

  function handleUserBtn(user) {
    console.log(user, "<-- current user ID");
    postMember(chosenTrip._id, user._id).then(() => {
      console.log("hello");
      setShowForm(false);
      setModifyTrip(true);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {showForm
          ? users.map((user, index) => (
              <Pressable
                key={index}
                style={styles.userBtn}
                onPress={() => handleUserBtn(user)}
              >
                <Text style={styles.userText}>{user.username}</Text>
              </Pressable>
            ))
          : null}
        {signedInUser.username === chosenTrip.admin ? (
          <Pressable style={styles.addMemberBtn} onPress={handleGetUsersBtn}>
            <Text style={styles.addMemberText}>ADD MEMBER</Text>
          </Pressable>
        ) : null}
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
    // flex: 1,
    // padding: 50,
    // backgroundColor: "#D7CCB2",
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
  addMemberText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FBFAF8",
    // fontWeight: "bold",
    // fontSize: 15,
    // color: "#096502",
  },
  userBtn: {
    // backgroundColor: "#423219",
    // borderColor: "#291E0E",
    // borderWidth: 3,
    // borderRadius: 5,
    backgroundColor: "#9A7AA0",
    alignSelf: "flex-start",
    alignItems: "center",
    // borderColor: "#291E0E",
    // borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
  },
  userText: {
    color: "white",
  },
});
