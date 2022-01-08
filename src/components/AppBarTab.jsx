import React from "react";
import { StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    marginVertical: 30,
    color: theme.colors.appBar.fontPrimary,
    fontSize: theme.fontSizes.appBar,
    fontFamily: theme.fontFamily,
  },
});

const AppBarTab = ({ text, to }) => {
  return (
    <Link to={to}>
      <Text style={styles.button}>{text}</Text>
    </Link>
  );
};

export default AppBarTab;
