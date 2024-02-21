import React from "react";
import { useForm } from "react-hook-form";
import { Text, View, TextInput } from "react-native";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Enter email address"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="text"
        placeholder="Choose username"
        {...register("username", { required: true })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register("Password", { required: true })}
      />
      <input
        type="password"
        placeholder="Confirm password"
        {...register("Confirm password", { required: true })}
      />

      <input type="submit" />
    </form>
  );
}
