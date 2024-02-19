import { View, Text, Pressable } from "react-native";

export default function TripList({ navigation }) {
  return (
    <View>
      <Text>This is the Trip List</Text>
      <Pressable onPress={() => navigation.navigate("Sign in page")}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
}
