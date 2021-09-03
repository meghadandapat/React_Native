import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To-do List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Header;
