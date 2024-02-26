import { Text, View, StyleSheet, ScrollView } from "react-native";
import TripNameHeader from "./TripNameHeader";
import TravelCard from "../Travel/TravelCard";
import StayCard from "../Stay/StayCard";
import ActivityCard from "../Activity/ActivityCard";
import MemberCard from "../Members/MemberCard";
import { useEffect, useState } from "react";
import TripNavBar from "./TripNavBar";
import { getTripById } from "../../api";

export default function SingleTrip({ route }) {
  const { trip_id } = route.params;
  const [navTab, setNavTab] = useState("Travel");
  const [chosenTrip, setChosenTrip] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function formatDate(date) {
    return new Date(date).toDateString();
  }

  useEffect(() => {
    getTripById(trip_id).then((data) => {
      setIsLoading(false);
      setChosenTrip(data);
    });
  }, []);

  if (isLoading)
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
        <TripNameHeader formatDate={formatDate} chosenTrip={chosenTrip} />
        <TripNavBar setNavTab={setNavTab} />
        {navTab === "Travel" ? <TravelCard chosenTrip={chosenTrip} /> : null}
        {navTab === "Stay" ? <StayCard chosenTrip={chosenTrip} /> : null}
        {navTab === "Activities" ? (
          <ActivityCard chosenTrip={chosenTrip} />
        ) : null}
        {navTab === "Members" ? <MemberCard chosenTrip={chosenTrip} /> : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#D7CCB2",
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
    borderColor: "#423219",
    borderWidth: 2,
    borderRadius: 5,
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 40,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
