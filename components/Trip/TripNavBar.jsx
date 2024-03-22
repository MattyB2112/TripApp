import { View, Text, Pressable, StyleSheet, Image } from "react-native";

export default function TripNavBar({ setNavTab }) {
  function handleTabSwitching(tabName) {
    setNavTab(tabName);
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={() => handleTabSwitching("Travel")}>
        <Text style={styles.navBarOption}>
          Travel
          {/* ✈️ */}
          {/* <Image
            style={{
              alignContent: "center",
              backgroundColor: "transparent",
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
            source={require("./images/plane.png")}
          /> */}
        </Text>
      </Pressable>
      <Pressable onPress={() => handleTabSwitching("Stay")}>
        <Text style={styles.navBarOption}>
          Stay
          {/* 🛌 */}
          {/* <Image
            style={{
              alignContent: "center",
              backgroundColor: "transparent",
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
            source={require("./images/house.jpg")}
          /> */}
        </Text>
      </Pressable>
      <Pressable onPress={() => handleTabSwitching("Activities")}>
        <Text style={styles.navBarOption}>
          Activities
          {/* 🍴 */}
          {/* <Image
            style={{
              alignContent: "center",
              backgroundColor: "green",
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
            source={require("./images/food.png")}
          /> */}
        </Text>
      </Pressable>
      <Pressable onPress={() => handleTabSwitching("Members")}>
        <Text style={styles.navBarOption}>
          Members
          {/* 👫 */}
          {/* <Image
            style={{
              alignContent: "center",
              backgroundColor: "transparent",
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
            source={require("./images/person.png")}
          /> */}
        </Text>
      </Pressable>
      <Pressable onPress={() => handleTabSwitching("Chat")}>
        <Text style={styles.navBarOption}>
          Chat
          {/* 💬 */}
          {/* <Image
            style={{
              alignContent: "center",
              backgroundColor: "transparent",
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
            source={require("./images/person.png")}
          /> */}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    // display: "flex",
    flex: 0.1,
    // flex: 0.05,
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "#D7CCB2",
    backgroundColor: "#F8F1FF",
    gap: 10,
    padding: 5,
    marginTop: 1,
    // flexShrink: 1,

  },
  navBarOption: {
    fontSize: 16,
    padding: 3,
    backgroundColor: "#2D7638",
    color: "#FBFAF8",
    fontWeight: "bold",
    borderRadius: 5,
  },
});
