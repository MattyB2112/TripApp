import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";

export default function TripCard() {
  const trips = [
    {
      name: "Paris",
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
          endate: "date",
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
      ],
      activities: [{ startdate: "date", name: "museum", info: "town square" }],
    },
    {
      name: "Malta",
      admin: "Stavros",
      members: [
        {
          username: "Stavros",
          password: "password5",
          email: "stavros@stavros.com",
        },
      ],
    },
    {
      name: "Group trip",
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
          endate: "date",
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

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {trips.map((trip) => {
            return (
              <View>
                <Pressable>
                  <Text style={[styles.item, styles.titleText]} key={trip.name}>
                    {trip.name}
                  </Text>
                  </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
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
