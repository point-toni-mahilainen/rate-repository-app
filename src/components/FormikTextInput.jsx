import React from "react";
import { StyleSheet, Text } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 15,
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fontFamily,
    color: theme.colors.text.error,
  },
  input: {
    height: 50,
    paddingLeft: 15,
    marginBottom: 15,
    width: "100%",
    borderStyle: "solid",
    borderRadius: 5,
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fontFamily,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={{
          ...styles.input,
          borderColor: showError
            ? theme.colors.border.error
            : theme.colors.border.primary,
          borderWidth: showError ? 2 : 1,
        }}
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
