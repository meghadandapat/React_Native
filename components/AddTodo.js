import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const AddTodo = ({ submitHandler }) => {
  //val is passed by default when we use onChangeText prop
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={StyleSheet.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
export default AddTodo;
