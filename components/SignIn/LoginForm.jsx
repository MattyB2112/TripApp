import React, { useCallback, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { View, TextInput, StyleSheet } from "react-native";
import { getUser } from "../../api";
import { Button } from "react-native-web";

export default function LoginForm({ navigation }) {
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(false);

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(
    (formData) => {
      try {
        getUser(formData.username).then((response) => {
          const newUser = response.user;
          setSignedInUser(newUser);
          setLoggedIn(true);
          navigation.navigate("My Trips");
        });
      } catch (error) {
        console.error(error);
      }

      register("username");
      register("password");
    },
    [register]
  );
  const onChangeField = useCallback(
    (name) => (text) => {
      setValue(name, text);
    },
    []
  );

  return (
    <View style={styles.container}>
      <TextInput
        autoCompleteType="username"
        keyboardType="username"
        textContentType="username"
        placeholder="Username"
        onChangeText={onChangeField("username")}
        style={styles.textInput}
      />
      <TextInput
        secureTextEntry
        autoCompleteType="password"
        placeholder="Password"
        onChangeText={onChangeField("password")}
        style={styles.textInput}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  textInput: {
    backgroundColor: "#FBFAF8",
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  },
});
