import { View, Text } from "react-native";
import LoginForm from "../components/SignIn/LoginForm";
import SignUpForm from "../components/SignIn/SignUpForm";

export default function Welcome() {
  return (
    <View>
      <LoginForm />
      <SignUpForm />
    </View>
  );
}
