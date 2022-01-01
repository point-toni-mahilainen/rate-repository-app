import React from "react";
import AppBar from "./AppBar";
import { Route, Switch, Redirect } from "react-router-native";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import { View, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.app.backgroundPrimary,
    height: "100%",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
