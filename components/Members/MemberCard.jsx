import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { deleteMember } from "../../api";

export default function MemberCard({ chosenTrip, setModifyTrip }) {
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);
  const { signedInUser, setSignedInUser } = useContext(UserContext);

  function handleMemberDelete(trip_id, member_username) {
    deleteMember(trip_id, member_username).then((response) => {
      setModifyTrip(true);
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.tabHeader}>Members</Text>
      <Text style={styles.admin}>Group admin: {chosenTrip.admin}</Text>
      {chosenTrip.members.map((memberItem) => {
        return (
          <View key={memberItem.username} style={styles.item}>
            <Text style={styles.cardText}>{memberItem.username}</Text>
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
                  <Text style={styles.cardText}>DELETE</Text>
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
    marginTop: 0,
    borderColor: "#423219",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#5D8233",
  },
  tabHeader: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    textShadowColor: "#B2A59B",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 4,
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
    backgroundColor: "#423219",
  },
  cardText: {
    fontFamily: "arial",
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
    lineHeight: 20,
  },
  admin: {
    fontFamily: "arial",
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
    lineHeight: 5,
  },
});
