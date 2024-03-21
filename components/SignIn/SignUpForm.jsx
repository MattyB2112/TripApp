import React, { useCallback, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { View, TextInput, StyleSheet, Pressable, Text } from "react-native";
import { postUser } from "../../api";
// import { Button } from "react-native-web";

export default function SignUpForm({ navigation }) {
  const { signedInUser, setSignedInUser } = useContext(UserContext);

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(
    (formData) => {
      // try {
      //   postUser(formData).then((response) => {
      //     const newUser = response.newUser;
      //     setSignedInUser(newUser);
      //     navigation.navigate("My Trips");
      //   });
      // } catch (error) {
      //   console.error(error);
      // }

      postUser(formData).then((response) => {
        const newUser = response.newUser;
        setSignedInUser(newUser);
        navigation.navigate("My Trips");
      })
      .catch((error) => {
        console.log(error)
      });

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
        autoCompleteType="off"
        keyboardType="default"
        textContentType="username"
        placeholder="Username"
        onChangeText={onChangeField("username")}
        style={styles.textInput}
      />
      <TextInput
        autoCompleteType="off"
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={onChangeField("email")}
        style={styles.textInput}
      />
      <TextInput
        secureTextEntry
        autoCompleteType="off"
        placeholder="Password"
        onChangeText={onChangeField("password")}
        style={styles.textInput}
      />
      {/* <Button
        title="Submit"
        style={styles.btn}
        onPress={handleSubmit(onSubmit)}
      /> */}
      <Pressable onPress={handleSubmit(onSubmit)} style={styles.btn}><Text style={styles.btnText}>Submit</Text></Pressable>
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
    height: 50,
    width: "80%",
    alignSelf: "center",
  },
  btn: {
    alignSelf: "center",
    alignItems: "center",
    width: "20%",
    backgroundColor: "#9A7AA0",
    // borderColor: "#423219",
    // borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 5,
    height: 40
  },
  btnText: {
    color: "#FBFAF8",
  },
});
