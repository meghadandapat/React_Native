//Component for messing around with flexbox in react native
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

//View in React native use flex by default
//The flex direction or main axis is column by default that is items will stack on top of one another
//Everything inside flex becomes flex item
//by default flex items take full width
//Adding flex 1 means that container will take up full height

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dddabc",
    paddingTop: 40,
    flexDirection: "column", //by default
    flex: 1, //1 means main axis will take 100% length(wd or ht depending upon flexDirection)
    justifyContent: "center", //how flex items will be displayed along main axis
    alignItems: "center", //along cross exis
  },

  boxOne: {
    backgroundColor: "aqua",
    padding: 10,
    flex: 2, //length along main axis will be twice as big
  },
  boxTwo: {
    backgroundColor: "coral",
    padding: 10,
    flex: 3, //length along main axis will be thrice as big
  },
  boxThree: {
    backgroundColor: "gold",
    padding: 10,
    flex: 1,
  },
  boxFour: {
    backgroundColor: "pink",
    padding: 10,
    flex: 1,
  },
});
export default Sandbox;
