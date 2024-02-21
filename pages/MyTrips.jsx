import { View, Text, Pressable, StyleSheet } from "react-native";
import TripCard from "../components/Trip/TripCard";

export default function MyTrips({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>MY TRIPS</Text>
      <TripCard />
      <Pressable onPress={() => navigation.navigate("Sign in")}>
        <Text style={styles.signIn}>← Sign In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D7CCB2",
    flex: 1,
  },
  signIn: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "#096502",
    marginLeft: 130,
    marginRight: 130,
    padding: 5,
    borderWidth: 2,
    borderRadius: 4,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#096502",
    textAlign: "center",
    marginTop: 20
  },
});
