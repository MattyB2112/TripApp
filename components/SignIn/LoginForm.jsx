import React, { useCallback, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { View, TextInput } from "react-native";
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
          setSignedInUser(response);
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
  console.log(signedInUser);
  const onChangeField = useCallback(
    (name) => (text) => {
      setValue(name, text);
      console.log(name, text);
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
        secureTextEntry
        autoCompleteType="password"
        placeholder="Password"
        onChangeText={onChangeField("password")}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
