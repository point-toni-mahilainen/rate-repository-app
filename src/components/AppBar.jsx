import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
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
      <AppBarTab text="Repositories" />
    </View>
  );
};

export default AppBar;
