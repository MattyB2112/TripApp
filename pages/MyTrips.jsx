import { View, Text, Pressable, StyleSheet } from "react-native";
import TripList from "../components/Trip/TripList";

export default function MyTrips({ navigation }) {
  return (
    <View style={styles.container}>
      <TripList navigation={navigation} />
      <Pressable onPress={() => navigation.navigate("Sign in")}>
        <Text style={styles.signIn}>← Sign In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F1FF",
    flex: 1,
  },
  signIn: {
    color: "#263D42",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "#263D42",
    backgroundColor: "#FBFAF8",
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
    marginTop: 20,
  },
});
