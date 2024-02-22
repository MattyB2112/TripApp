import { View, Text, Pressable, StyleSheet } from "react-native";

export default function TripNavBar({ setNavTab }) {
  function handleTabSwitching(tabName) {
    setNavTab(tabName);
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={() => handleTabSwitching("Travel")}>
        <Text>Travel</Text>
      </Pressable>
      <Pressable onPress={() => handleTabSwitching("Stay")}>
        <Text>Stay</Text>
      </Pressable>
      <Pressable onPress={() => handleTabSwitching("Activities")}>
        <Text>Activities</Text>
      </Pressable>
      <Pressable onPress={() => handleTabSwitching("Members")}>
        <Text>Members</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#D7CCB2",
    gap: 10,
    padding: 5,
  },
});
