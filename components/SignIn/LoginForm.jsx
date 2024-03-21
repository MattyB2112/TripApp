import React, { useCallback, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { View, TextInput, StyleSheet, Pressable, Text} from "react-native";
import { getUser } from "../../api";
// import { Button } from "react-native-web";

export default function LoginForm({ navigation }) {
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(false);

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(
  // const onSubmit =
    (formData) => {
      // try {
      //   console.log(formData, "formData")
      //   getUser(formData.username).then((response) => {
      //     console.log(response)
      //     const newUser = response.user;
      //     setSignedInUser(newUser);
      //     setLoggedIn(true);
      //     navigation.navigate("My Trips");
      //   });
      // } catch (error) {
      //   console.error(error);
      // }
      console.log(formData.username)
      getUser(formData.username).then((response) => {
        console.log(response)
        const newUser = response.user;
        setSignedInUser(newUser);
        setLoggedIn(true);
        navigation.navigate("My Trips");
      })
      .catch((error) => {
        // console.error(error)
        console.log(error)
      });
    
      register("username");
      register("password");
    },
    [register]
    // }
  );
  const onChangeField = useCallback(
    (name) => (text) => {
      // console.log(name, text)
      setValue(name, text);
    },
    []
  );

  return (
    <View style={styles.container}>
      <TextInput
        // autoCompleteType="username"
        autoCompleteType="off"
        // keyboardType="username"
        keyboardType="default"
        textContentType="username"
        placeholder="Username"
        onChangeText={onChangeField("username")}
        style={styles.textInput}
      />
      <TextInput
        secureTextEntry
        // autoCompleteType="password"
        autoComplete="off"
        keyboardType="default"
        placeholder="Password"
        onChangeText={onChangeField("password")}
        style={styles.textInput}
      />
      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)}/> */}
      <Pressable onPress={handleSubmit(onSubmit)} style={styles.btn}><Text style={styles.btnText}>Submit</Text></Pressable>
      {/* <Pressable onPress={()=> onSubmit()} style={styles.btn}><Text style={styles.btnText}>Submit</Text></Pressable> */}
    </View>
  )
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
    alignSelf: "center"
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
