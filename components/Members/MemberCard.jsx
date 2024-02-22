import { View, Text, StyleSheet } from "react-native";

export default function MemberCard({ chosenTrip }) {
  return (
    <View style={styles.container}>
      <Text>Members</Text>
      <Text>Admin: {chosenTrip[0].admin}</Text>
      {chosenTrip[0].members.map((memberItem) => {
        return (
          <View style={styles.item}>
            <Text>{memberItem.username}</Text>
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
});
