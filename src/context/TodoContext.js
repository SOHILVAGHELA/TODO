import { createContext, useContext } from "react";
export const TudoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});
export const useTudo = () => {
  return useContext(TudoContext);
};
export const TodoProvider = TudoContext.Provider;
