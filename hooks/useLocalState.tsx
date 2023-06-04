import { createContext, useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { setItemAsync, getItemAsync } from "expo-secure-store";

interface useLocalTodosReturnType {
  todos: Todo[];
  loading: boolean;
  createTodo: (content: string) => void;
  checkTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodosContext = createContext<useLocalTodosReturnType>({
  todos: [],
  loading: true,
  createTodo(_) {},
  checkTodo(_) {},
  deleteTodo(_) {},
});

async function saveLocalTodos(todos: Todo[]) {
  console.log(todos);
  await setItemAsync("todos", JSON.stringify(todos));
}

export function useLocalTodos(): useLocalTodosReturnType {
  let [todos, setTodos] = useState<Todo[]>([]);
  let [loading, setLoading] = useState(true);

  async function createTodo(content: string) {
    setTodos((previousTodos) => {
      let currentTodos = [
        ...previousTodos,
        {
          checked: false,
          content,
          id: Math.random().toString(),
        },
      ];

      saveLocalTodos(todos);

      return currentTodos;
    });
  }

  async function checkTodo(id: string) {
    setTodos((previousTodos) => {
      let currentTodos: Todo[] = previousTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }

        return todo;
      });

      saveLocalTodos(currentTodos);

      return currentTodos;
    });
  }

  async function deleteTodo(id: string) {
    setTodos((previousTodos) => {
      let currentTodos = previousTodos.filter((todo) => todo.id !== id);

      saveLocalTodos(currentTodos);

      return currentTodos;
    });
  }

  useEffect(() => {
    getItemAsync("todos").then((item) => {
      setLoading(false);

      if (item == null) {
        return;
      }

      setTodos(JSON.parse(item));
    });
  }, []);

  return {
    todos,
    createTodo,
    checkTodo,
    deleteTodo,
    loading,
  };
}
