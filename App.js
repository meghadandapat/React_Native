import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "Go for a walk", key: "3" },
  ]);

  const deleteHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text, key: Math.random().toString() }, ...prevTodos];
    });
  };
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* Todo Form */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} deleteHandler={deleteHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

//normally css is not inherited but it is text within text is an exception
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
