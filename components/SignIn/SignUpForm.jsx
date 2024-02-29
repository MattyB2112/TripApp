import React, { useCallback, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { View, TextInput } from "react-native";
import { postUser } from "../../api";
import { Button } from "react-native-web";

export default function SignUpForm({ navigation }) {
  const { signedInUser, setSignedInUser } = useContext(UserContext);

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(
    (formData) => {
      try {
        postUser(formData).then((response) => {
          const newUser = response.newUser;
          setSignedInUser(newUser);
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
    <View>
      <TextInput
        autoCompleteType="username"
        keyboardType="username"
        textContentType="username"
        placeholder="Username"
        onChangeText={onChangeField("username")}
      />
      <TextInput
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={onChangeField("email")}
      />
      <TextInput
        secureTextEntry
        autoCompleteType="password"
        placeholder="Password"
        onChangeText={onChangeField("password")}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
