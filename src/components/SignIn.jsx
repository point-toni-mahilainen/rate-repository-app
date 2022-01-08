import { Formik } from "formik";
import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";
import * as yup from "yup";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.container.backgroundPrimary,
  },
  button: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#0165D4",
    textAlign: "center",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: theme.colors.text.secondary,
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fontFamily,
    fontWeight: "bold",
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  Username: yup
    .string()
    .min(4, "Username must be at least 4 characters long")
    .required("Username is required"),
  Password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/,
      "Password must contain small and large letters and at least one number"
    )
    .required("Password is required"),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="Username" placeholder="Username" />
      <FormikTextInput
        name="Password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = () => {
    console.log("Signed in!");
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
