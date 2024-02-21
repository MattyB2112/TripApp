import { View, Text, Pressable, StyleSheet } from "react-native";
import SignUpForm from "../components/SignIn/SignUpForm";

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <SignUpForm />
      <Pressable onPress={() => navigation.navigate("My Trips")}>
        <Text style={styles.backToTrips}>← My Trips</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D7CCB2",
    flex: 1,
  },
  backToTrips: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderColor: "#096502",
    marginLeft: 110,
    marginRight: 110,
    padding: 10,
    borderWidth: 2,
    borderRadius: 4,
  },
});
