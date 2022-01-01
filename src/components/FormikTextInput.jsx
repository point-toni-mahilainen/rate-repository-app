import React from "react";
import { StyleSheet, Text } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  input: {
    height: 50,
    paddingLeft: 15,
    marginBottom: 15,
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: theme.fontSizes.medium,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
