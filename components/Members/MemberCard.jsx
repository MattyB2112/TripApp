import { View, Text, StyleSheet, Pressable } from "react-native";

export default function MemberCard({ chosenTrip }) {
  return (
    <View style={styles.container}>
      <Text>Members</Text>
      <Text>Admin: {chosenTrip[0].admin}</Text>
      {chosenTrip[0].members.map((memberItem) => {
        return (
          <View key={memberItem.username} style={styles.item}>
            <Text>{memberItem.username}</Text>
            {chosenTrip[0].admin !== memberItem.username ? (
              <View style={styles.buttonContainer}>
                <Pressable style={styles.button}>
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
