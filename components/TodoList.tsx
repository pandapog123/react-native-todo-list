import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React, { useContext } from "react";
import { TodosContext } from "../hooks/useLocalState";
import Todo from "./TodoComponent";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TodoList() {
  const todosObj = useContext(TodosContext);

  function handleDelete(id: string) {
    Alert.alert("Delete Todo?", "", [
      {
        text: "Cancel",
      },
      {
        style: "destructive",
        onPress() {
          todosObj.deleteTodo(id);
        },
        text: "Delete",
      },
    ]);
  }

  return (
    <>
      {todosObj.todos.map((todo, index) => {
        return (
          <View key={todo.id}>
            <View style={styles.listItem}>
              <Todo todo={todo} />

              <TouchableOpacity onPress={() => handleDelete(todo.id)}>
                <FontAwesomeIcon
                  icon={faTrash}
                  color="red"
                  style={styles.listItemIcon}
                ></FontAwesomeIcon>
              </TouchableOpacity>
            </View>

            {index < todosObj.todos.length - 1 ? (
              <View style={styles.divider} />
            ) : null}
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  listItemIcon: {
    padding: 12,
  },
  divider: {
    backgroundColor: "grey",
    height: 1,
    width: "85%",
  },
});
