import { Text, View } from "react-native";
import TripNameHeader from "./TripNameHeader";
import TravelCard from "../Travel/TravelCard";
import StayCard from "../Stay/StayCard";
import ActivityCard from "../Activity/ActivityCard";
import MemberCard from "../Members/MemberCard";
import { useState } from "react";
import TripNavBar from "./TripNavBar";

export default function SingleTrip({ chosenTrip }) {
  const [navTab, setNavTab] = useState("Travel");
  function formatDate(date) {
    return new Date(date).toDateString();
  }
  return (
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
  );
}
