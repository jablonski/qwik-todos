import type { Todo } from "./todo";

let todos: Todo[] = [];

export const todoService = {
  loadTodos(completed: "all" | "active" | "completed") {
    if (completed === "active") {
      return todos.filter((todo) => !todo.completed);
    }
    if (completed === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  },
  loadItemsLeft() {
    return todos.filter((todo) => !todo.completed).length;
  },
  addTodo(title: string) {
    const newTodo = {
      id: uuid(),
      title,
      createdTimestamp: new Date(),
    };
    todos.push(newTodo);
    return newTodo;
  },
  deleteTodo(id: string) {
    todos = todos.filter((todo) => todo.id !== id);
  },
  updateTodo({ id, title }: Todo) {
    const foundTodo = todos.find((todo) => todo.id === id);
    if (foundTodo) {
      foundTodo.title = title;
    }
  },
  toggleTodo({ id }: Todo) {
    const foundTodo = todos.find((todo) => todo.id === id);
    if (foundTodo) {
      foundTodo.completed = !foundTodo.completed;
    }
  },
  toggleAllTodos() {
    const completed = todos.findIndex((todo) => !todo.completed) >= 0;
    todos.forEach((todo) => (todo.completed = completed));
  },
  clearCompletedTodos() {
    todos = todos.filter((todo) => !todo.completed);
  },
};

function uuid() {
  let d = new Date().getTime();
  const result = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return result;
}
