import { Text, View } from "react-native";
import TripNameHeader from "./TripNameHeader";

export default function SingleTrip({ chosenTrip }) {
  console.log(chosenTrip);
  function formatDate(date) {
    return new Date(date).toDateString();
  }
  return (
    <View>
      <TripNameHeader formatDate={formatDate} chosenTrip={chosenTrip} />
    </View>
  );
}
