import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import SingleTrip from "./SingleTrip";

export default function TripCard({ navigation }) {
  const [chosenTrip, setChosenTrip] = useState(null);
  const trips = [
    {
      _id: "65d61e7acbe57211996b86c3",
      name: "Paris",
      startdate: "2024-02-21T16:01:59.657+00:00",
      enddate: "2024-02-21T16:01:59.657+00:00",
      admin: "Justyna",
      travel: [
        {
          startdate: "date",
          leavetime: "time",
          arrivedate: "date",
          arrivetime: "time",
          type: "plane",
          info: "Heathrow",
        },
      ],
      stay: [
        {
          startdate: "date",
          enddate: "date",
          name: "hotel coder",
          type: "hotel",
          info: "address",
        },
        {
          startdate: "10th May",
          enddate: "15th May",
          name: "hotel helloworld",
          type: "hotel",
          info: "123 hello street",
        },
      ],
      members: [
        {
          username: "MattB",
          password: "password",
          email: "mattb@matt.com",
        },
        {
          username: "Justyna",
          password: "password2",
          email: "justyna@justyna.com",
        },
      ],
      activities: [
        {
          startdate: "date",
          name: "museum",
          info: "town square",
        },
      ],
    },
    {
      _id: "65d61e7acbe57211996b86c4",
      name: "Malta",
      startdate: "2024-02-21T16:01:59.657+00:00",
      enddate: "2024-02-21T16:01:59.657+00:00",
      admin: "Stavros",
      members: [
        {
          username: "Stavros",
          password: "password5",
          email: "stavros@stavros.com",
        },
      ],
      travel: [],
      stay: [],
      activities: [],
    },
    {
      _id: "65d61e7acbe57211996b86c5",
      name: "Group trip",
      startdate: "2024-02-21T16:01:59.657+00:00",
      enddate: "2024-02-21T16:01:59.657+00:00",
      admin: "Jack",
      travel: [
        {
          startdate: "date",
          leavetime: "time",
          arrivedate: "date",
          arrivetime: "time",
          type: "plane",
          info: "Heathrow",
        },
      ],
      stay: [
        {
          startdate: "date",
          enddate: "date",
          name: "hotel coder",
          type: "hotel",
          info: "address",
        },
      ],
      members: [
        {
          username: "MattB",
          password: "password",
          email: "mattb@matt.com",
        },
        {
          username: "Justyna",
          password: "password2",
          email: "justyna@justyna.com",
        },
        {
          username: "Lala",
          password: "password3",
          email: "lala@lala.com",
        },
        {
          username: "Jack",
          password: "password4",
          email: "jack@jack.com",
        },
        {
          username: "Stavros",
          password: "password5",
          email: "stavros@stavros.com",
        },
      ],
      activities: [{ startdate: "date", name: "golfing", info: "golf-course" }],
    },
  ];

  console.log("hi");

  function chooseTrip(id) {
    console.log("pressed button");
    const trip = trips.filter((trip) => {
      return trip._id === id;
    });
    setChosenTrip(trip);
    navigation.navigate("Single Trip", { trip_id: id });
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.container}>
        {/* <ScrollView> */}
        {trips.map((trip) => {
          return (
            <Pressable key={trip.name} onPress={() => chooseTrip(trip._id)}>
              <Text style={[styles.item, styles.titleText]}>{trip.name}</Text>
            </Pressable>
          );
        })}
        {/* {chosenTrip !== null ? <SingleTrip chosenTrip={chosenTrip} /> : null} */}
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
});
