import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import LoginForm from "../components/SignIn/LoginForm";
import SignUpForm from "../components/SignIn/SignUpForm";

export default function SignIn({ navigation }) {

  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  function handleLogin() {
    setLogin(true);
  }

  function handleSignUp() {
    setSignUp(true);
  }

  return (
    <View style={styles.container}>
      {login ? (
        <View>
          <LoginForm navigation={navigation} />
        </View>
      ) : signUp ? (
        <View>
          <SignUpForm navigation={navigation} />
        </View>
      ) : (
        <View>
          <Pressable style={styles.btn} onPress={handleLogin}>
            <Text>LOGIN</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={handleSignUp}>
            <Text>SIGN UP</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D7CCB2",
    flex: 1,
  },
  btn: {
    alignSelf: "center",
    alignItems: "center",
    width: "20%",
    borderColor: "#423219",
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 5,
  },
});
