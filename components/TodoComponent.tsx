import { useContext } from "react";
import { TodosContext } from "../hooks/useLocalState";
import type { Todo } from "../types/todo";
import { StyleSheet, Text, View } from "react-native";
import CustomCheckbox from "./CustomCheckbox";

interface PropTypes {
  todo: Todo;
}

export default function Todo({ todo }: PropTypes) {
  const todosObj = useContext(TodosContext);

  function handleCheck(checked: boolean) {
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
