import { Text, View, StyleSheet, ScrollView } from "react-native";
import TripNameHeader from "./TripNameHeader";
import TravelCard from "../Travel/TravelCard";
import StayCard from "../Stay/StayCard";
import ActivityCard from "../Activity/ActivityCard";
import MemberCard from "../Members/MemberCard";
import { useEffect, useState } from "react";
import TripNavBar from "./TripNavBar";

export default function SingleTrip({ route }) {
  const { trip_id } = route.params;
  const [navTab, setNavTab] = useState("Travel");
  const [chosenTrip, setChosenTrip] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function formatDate(date) {
    return new Date(date).toDateString();
  }

  console.log(trip_id);

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

  function chooseTrip(id) {
    const trip = trips.filter((trip) => {
      return trip._id === id;
    });
    setChosenTrip(trip);
    console.log("trip");
  }

  useEffect(() => {
    chooseTrip(trip_id);
    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
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
    // <View>
    //   <Text>Single Trip here</Text>
    //   <Text>{trip_id}</Text>
    // </View>
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
