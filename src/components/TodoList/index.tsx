import React from "react";
import { TodoListUI } from "./ui";
import { useAppSelector } from "../../store";


export const TodoList: React.FC = (): JSX.Element => {
  const state = useAppSelector(state => state.todo.items);

  return <TodoListUI items={state}/>
};
