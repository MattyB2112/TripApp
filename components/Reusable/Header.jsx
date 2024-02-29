import React, { useContext } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { UserContext } from "../../contexts/UserContext";

export default function Header({ navigation }) {
  const { signedInUser, setSignedInUser } = useContext(UserContext);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.transparentLine}>{"\n"}</Text> */}
      <Text style={styles.titleText}>Trippin</Text>
      <Text style={styles.userText}>{signedInUser.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "#9A7AA0",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FBFAF8",
  },
  tripsButton: {
    color: "#B2CCE4",
    textAlign: "right",
    fontSize: 20,
    fontFamily: "sans-serif",
    marginRight: 10,
    marginTop: -10,
  },
  userText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FBFAF8",
    alignSelf: "flex-end",
  },
  transparentLine: {
    backgroundColor: "#9A7AA0",
    color: "#9A7AA0",
  },
});
