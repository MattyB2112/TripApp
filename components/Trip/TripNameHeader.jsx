import { Text } from "react-native";

export default function TripNameHeader({ formatDate, chosenTrip }) {
  return (
    <Text>
      {chosenTrip[0].name} {formatDate(chosenTrip[0].startdate)}-
      {formatDate(chosenTrip[0].enddate)}
    </Text>
  );
}
