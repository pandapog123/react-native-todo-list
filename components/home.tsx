import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { TodosContext, useLocalTodos } from "../hooks/useLocalState";
import TodoList from "./TodoList";
import TodoListFormButton from "./TodoListFormButton";

export default function Home() {
  const localTodosObj = useLocalTodos();

  return (
    <TodosContext.Provider value={localTodosObj}>
      <View style={styles.header}>
        <SafeAreaView style={styles.headerSafeArea}>
          <Text style={styles.headerText}>To-Do List</Text>

          <TodoListFormButton />
        </SafeAreaView>
      </View>
      <ScrollView>
        <TodoList />
      </ScrollView>
    </TodosContext.Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "aliceblue",
    padding: 8,
  },
  headerSafeArea: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 32,
    padding: 8,
  },
});
