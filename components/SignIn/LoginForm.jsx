import React from "react";
import { useForm } from "react-hook-form";
import { Text, View, TextInput } from "react-native";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <Text style={{ color: "white" }}>Login</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          {...register("Username", { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("Password", { required: true })}
        />

        <input type="submit" />
      </form>
    </>
  );
}
