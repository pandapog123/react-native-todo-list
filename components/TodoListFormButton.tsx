import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { TodosContext } from "../hooks/useLocalState";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

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
