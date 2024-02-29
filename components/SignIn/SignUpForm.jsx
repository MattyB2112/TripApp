import React, { useCallback, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { View, TextInput, StyleSheet } from "react-native";
import { postUser } from "../../api";
import { Button } from "react-native-web";

export default function SignUpForm({ navigation }) {
  const { signedInUser, setSignedInUser } = useContext(UserContext);

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(
    (formData) => {
      try {
        postUser(formData).then((response) => {
          setSignedInUser(response);
          navigation.navigate("My Trips");
        });
      } catch (error) {
        console.error(error);
      }

      register("username");
      register("email");
      register("password");
    },
    [register]
  );
  console.log(signedInUser);
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
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={onChangeField("email")}
        style={styles.textInput}
      />
      <TextInput
        secureTextEntry
        autoCompleteType="password"
        placeholder="Password"
        onChangeText={onChangeField("password")}
        style={styles.textInput}
      />
      <Button
        title="Submit"
        style={styles.btn}
        onPress={handleSubmit(onSubmit)}
      />
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
