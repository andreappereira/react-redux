import React, { FormEvent } from "react";


interface StateProps {
    newTodo: string,
};

interface DispatchProps {
  onNewTodo: (e: FormEvent) => void,
  onSetNewTodo: (value: string) => void,
};

type AddTodoProps = StateProps & DispatchProps;


export const AddTodoUI: React.FC<AddTodoProps> = ({...rest}) => (
  <div>
    <form onSubmit={rest.onNewTodo}>
      <input
        type="text"
        placeholder="Novo to-do"
        value={rest.newTodo}
        onChange={(e) => rest.onSetNewTodo(e.target.value)}
      />
      <button type="submit">
        Adicionar
      </button>
    </form>
  </div>
);
