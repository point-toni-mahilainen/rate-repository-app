import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar.backgroundPrimary,
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 30,
    color: theme.colors.appBar.fontPrimary,
    fontSize: theme.fontSizes.appBar,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Sign in" to="/signin" />
        <AppBarTab text="Repositories" to="/" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
