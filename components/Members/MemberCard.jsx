import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { deleteMember } from "../../api";

export default function MemberCard({ chosenTrip }) {
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);
  const { signedInUser, setSignedInUser } = useContext(UserContext);

  function handleMemberDelete(trip_id, member_username) {
    deleteMember(trip_id, member_username).then((response) => {
      setModify(true);
    });
  }
  return (
    <View style={styles.container}>
      <Text>Members</Text>
      <Text>Admin: {chosenTrip.admin}</Text>
      {chosenTrip.members.map((memberItem) => {
        return (
          <View key={memberItem.username} style={styles.item}>
            <Text>{memberItem.username}</Text>
            {signedInUser.username === chosenTrip.admin &&
            chosenTrip.admin !== memberItem.username ? (
              <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.button}
                  onPress={() =>
                    handleMemberDelete(chosenTrip._id, {
                      username: memberItem.username,
                    })
                  }
                >
                  <Text>Delete</Text>
                </Pressable>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  item: {
    alignContent: "center",
    padding: 20,
    fontSize: 15,
    marginTop: 5,
    borderColor: "#423219",
    borderWidth: 2,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 5,
    flex: 1,
    gap: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    borderColor: "#423219",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  },
});
