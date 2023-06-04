import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import type { Todo } from "../types/todo";
import CustomCheckbox from "./CustomCheckbox";
import { TodosContext } from "../hooks/useLocalState";

interface PropTypes {
  todo: Todo;
}

export default function Todo({ todo }: PropTypes) {
  const todosObj = useContext(TodosContext);

  function handleCheck(checked: boolean) {
    console.log(checked);
    todosObj.checkTodo(todo.id);
  }

  return (
    <View style={styles.todo}>
      <CustomCheckbox defaultValue={todo.checked} handleChange={handleCheck} />

      <Text style={styles.todoContent}>{todo.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  todoContent: {
    fontSize: 22,
    paddingHorizontal: 8,
  },
});
