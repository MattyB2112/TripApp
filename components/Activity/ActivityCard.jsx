import { View, Text, StyleSheet, Pressable } from "react-native";

export default function ActivityCard({ chosenTrip }) {
  return (
    <View style={styles.container}>
      <Text>Activities</Text>
      {chosenTrip.activities.map((activityItem) => {
        return (
          <View key={activityItem._id} style={styles.item}>
            <Text>{activityItem.name}</Text>
            <Text>{activityItem.startdate}</Text>
            <Text>{activityItem.info}</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button}>
                <Text>Edit</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Text>Delete</Text>
              </Pressable>
            </View>
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
