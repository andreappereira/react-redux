import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodoUI } from "./ui";
import { addTodo } from "../../store/slices/todo";


export const AddTodo: React.FC = (): JSX.Element => {
  const [newTodo, setNewTodo] = useState<string>('');
  const dispatch = useDispatch();

  
  const handleNewTodo = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo('');
  }
  

  return (
    <AddTodoUI
      newTodo={newTodo}
      onNewTodo={handleNewTodo}
      onSetNewTodo={setNewTodo}
    />
  )
};
