import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    marginVertical: 30,
    color: theme.colors.appBar.fontPrimary,
    fontSize: theme.fontSizes.appBar,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text style={styles.button}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;
