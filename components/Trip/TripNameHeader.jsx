import { Text } from "react-native";

export default function TripNameHeader({ formatDate, chosenTrip }) {
  //console.log(chosenTrip);
  return (
    <Text>
      {chosenTrip.name} {formatDate(chosenTrip.startdate)}-
      {formatDate(chosenTrip.enddate)}
    </Text>
  );
}
