import React from "react";


interface StateProps {
  items: string[]
}

type TodoListProps = StateProps;


export const TodoListUI: React.FC<TodoListProps> = ({...rest}) => (
  <div>
    <ul>
      {rest.items.map((item, index) => (
        <li key={`${item}-${index + 1}`}>{item}</li>
      ))}
    </ul>
  </div>
);
