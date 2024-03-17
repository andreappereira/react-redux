import { Provider as ReduxProvider } from "react-redux";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { store } from "./store";


export const App = () => {
  return (
    <ReduxProvider store={store}>
      <TodoList/>
      <AddTodo/>
    </ReduxProvider>
  )
};
