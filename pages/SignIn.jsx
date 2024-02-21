import { View, Text, Pressable } from "react-native";

export default function SignIn({ navigation }) {
  return (
    <View>
      <Text>This is the Sign In</Text>
      <Pressable onPress={() => navigation.navigate("My Trips")}>
        <Text>Back to Trips</Text>
      </Pressable>
    </View>
  );
}
