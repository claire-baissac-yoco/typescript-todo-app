import { useState, useReducer } from "react";
import { reducer, initialState, todoActionType } from "../../reducers/todos";
import NewTodoForm from "../NewTodoForm";
import Todo from "../Todo";
import styles from "./TodoList.module.css";

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isFormVisible, setIsFormVisible] = useState(false);

  function onDeleteTodo(id: number) {
    console.log(id);
    dispatch({ type: todoActionType.delete, payload: {id: id} });
  }

  function onResetButtonClick() {
    dispatch({ type: todoActionType.reset, payload: {}});
  }

  function onAddTodoClick() {
    setIsFormVisible(true);
  }

  function onAddNewTodo(title: string, color: string) {
    console.log(title);
    dispatch({ type: todoActionType.add, payload: { title: title, color: color } });
    setIsFormVisible(false);
  }

  function onCancelAddTodo() {
    setIsFormVisible(false);
  }

  function onToggleTask(id: number) {
    console.log(id);
    dispatch({ type: todoActionType.toggle, payload: {id: id} });
  }

  interface Todo {
    id: number
    title: string
    color: string
    isComplete: boolean
  }

  return (
    <div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={onResetButtonClick}>
          Reset
        </button>
        <button className={styles.button} onClick={onAddTodoClick}>
          Add Todo
        </button>
      </div>
      <div>
        <h2>To do</h2>
        <div>
          {state
            .filter((todo: Todo) => {
              return !todo.isComplete;
            })
            .map((todo: Todo) => {
              return (
                <Todo
                  id={todo.id}
                  title={todo.title}
                  color={todo.color}
                  isComplete={todo.isComplete}
                  onDeleteTodo={onDeleteTodo}
                  onToggleTask={onToggleTask}
                />
              );
            })}
        </div>
      </div>
      <div>
        <h2>Completed</h2>
        <div>
          {state
            .filter((todo: Todo) => {
              return todo.isComplete;
            })
            .map((todo: Todo) => {
              return (
                <Todo
                  id={todo.id}
                  title={todo.title}
                  color={todo.color}
                  isComplete={todo.isComplete}
                  onDeleteTodo={onDeleteTodo}
                  onToggleTask={onToggleTask}
                />
              );
            })}
        </div>
      </div>
      {isFormVisible && (
        <NewTodoForm
          onAddNewTodo={onAddNewTodo}
          onCancelAddTodo={onCancelAddTodo}
        />
      )}
    </div>
  );
}

export default TodoList;
