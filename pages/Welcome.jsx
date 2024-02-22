import { View, Text } from "react-native";
import LoginForm from "../components/SignIn/LoginForm";
import TripAdder from "../components/Trip/TripAdder";

export default function Welcome() {
  return (
    <View style={{ flex: 1 }}>
      {/* <LoginForm /> */}
      <TripAdder />
    </View>
  );
}
