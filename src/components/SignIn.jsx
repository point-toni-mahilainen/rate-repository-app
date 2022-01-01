import { Formik } from "formik";
import React from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";
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
    color: "#FFFFFF",
    fontSize: theme.fontSizes.medium,
    fontWeight: "bold",
  },
});

const initialValues = {
  username: "",
  password: "",
};

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
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
