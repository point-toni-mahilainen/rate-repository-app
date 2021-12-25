import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  avatarContainer: {
    width: "23%",
  },
  avatarImage: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  basicInfo: {
    display: "flex",
    width: "77%",
  },
  count: {
    marginBottom: 5,
    fontSize: theme.fontSizes.medium,
    fontWeight: "bold",
  },
  countDescription: {
    fontSize: theme.fontSizes.medium,
  },
  description: {
    fontSize: theme.fontSizes.medium,
    marginVertical: 10,
  },
  flexContainerColumn: {
    display: "flex",
  },
  flexItem: {
    flexGrow: 1,
    alignItems: "center",
  },
  fullName: {
    fontWeight: "bold",
    fontSize: theme.fontSizes.medium,
  },
  language: {
    alignSelf: "flex-start",
    fontSize: theme.fontSizes.medium,
    padding: 10,
    backgroundColor: "#0066D3",
    color: theme.colors.text.secondary,
    borderRadius: 5,
  },
  statsContainer: {
    display: "flex",
    marginTop: 20,
    flexDirection: "row",
  },
  upperContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
});

const RepositoryItem = ({ item }) => {
  const checkCount = (count) => {
    if (count >= 1000) {
      const countRoundedStr = (Math.round(count / 100) * 100).toString();
      const part1 = countRoundedStr.slice(0, countRoundedStr.length - 3);
      const part2 = countRoundedStr.slice(
        countRoundedStr.length - 3,
        countRoundedStr.length - 2
      );
      return `${part1}.${part2}k`;
    }
    return count.toString();
  };

  return (
    <View style={{ padding: 20 }}>
      <View style={styles.upperContainer}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatarImage}
            source={{
              uri: item.ownerAvatarUrl,
            }}
          />
        </View>
        <View style={styles.basicInfo}>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.flexItem}>
          <Text style={styles.count}>{checkCount(item.stargazersCount)}</Text>
          <Text style={styles.countDescription}>Stars</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.count}>{checkCount(item.forksCount)}</Text>
          <Text style={styles.countDescription}>Forks</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.count}>{checkCount(item.reviewCount)}</Text>
          <Text style={styles.countDescription}>Reviews</Text>
        </View>
        <View style={styles.flexItem}>
          <Text style={styles.count}>{checkCount(item.ratingAverage)}</Text>
          <Text style={styles.countDescription}>Ratings</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
