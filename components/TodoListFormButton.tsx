import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { TodosContext } from "../hooks/useLocalState";

export default function TodoListFormButton() {
  const todosObj = useContext(TodosContext);

  function handleClick() {
    Alert.prompt(
      "Create a New Todo",
      "Type the contents of your new todo",
      todosObj.createTodo
    );
  }

  return (
    <TouchableOpacity onPress={handleClick}>
      <FontAwesomeIcon icon={faAdd} style={styles.headerIconButton} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  headerIconButton: {
    padding: 14,
    margin: 12,
  },
});
