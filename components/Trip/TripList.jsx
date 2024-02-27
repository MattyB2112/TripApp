import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import SingleTrip from "./SingleTrip";

import { UserContext } from "../../contexts/UserContext";
import { getTrips } from "../../api.js";

export default function TripList({ navigation }) {
  const [trips, setTrips] = useState([]);
  const { signedInUser, setSignedInUser } = useContext(UserContext);

  useEffect(() => {
    getTrips().then((data) => {
      const signedInUserTrips = [];

      data.forEach((trip) => {
        trip.members.forEach((member) => {
          if (member.username === signedInUser.username) {
            signedInUserTrips.push(trip);
          }
        });
      });
      setTrips(signedInUserTrips);
    });
  }, []);

  function chooseTrip(id) {
    console.log("pressed button");
    const trip = trips.filter((trip) => {
      return trip._id === id;
    });
    navigation.navigate("Single Trip", { trip_id: id });
  }

  function deleteTrip(id) {
    console.log(id, "trip id");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* <ScrollView> */}
        {trips.map((trip) => {
          return (
            <View key={trip._id} style={styles.tripItemContainer}>
              <Pressable onPress={() => chooseTrip(trip._id)}>
                <Text style={[styles.item, styles.titleText]}>{trip.name}</Text>
              </Pressable>
              <Pressable onPress={() => deleteTrip(trip._id)}>
                <Text style={[styles.item, styles.titleText]}>Delete</Text>
              </Pressable>
            </View>
          );
        })}
        {/* </ScrollView> */}
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
  tripItemContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
});
