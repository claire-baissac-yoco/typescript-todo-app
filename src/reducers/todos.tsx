export const initialState = [
  {
    id: 0,
    title: "Clean dishes",
    isComplete: false,
    color: "lightgrey",
  },
  {
    id: 1,
    title: "Take out trash",
    isComplete: false,
    color: "lightgrey",
  },
  {
    id: 2,
    title: "Feed pets",
    isComplete: true,
    color: "lightgrey",
  },
];

export enum todoActionType {
  add = "addTodo",
  delete = "deleteTodo",
  reset = "resetTodo",
  toggle = "toggleTask"
}

interface todoActionPayload {
  id?: number
  title?: string
  color?: string
}

interface todoAction {
  type: todoActionType
  payload: todoActionPayload
}

interface IProps {
  id: number
  title: string
  isComplete: boolean
  color: string
}

export function reducer(state: IProps[], action: todoAction): IProps[] {
  console.log(action);
  switch (action.type) {
    case "addTodo": {
      console.log(action.type);
      const newTodos = [...state];
      const newId = Math.floor(Math.random() * 9999999);
      newTodos.push({
        id: newId,
        title: action.payload.title ? action.payload.title : "",
        isComplete: false,
        color: action.payload.color ? action.payload.color : "",
      });
      return newTodos;
    }
    case "deleteTodo": {
      console.log(action.type);
      const newTodos = state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
      return newTodos;
    }
    case "resetTodo": {
      console.log(action.type);
      return initialState;
    }
    case "toggleTask": {
      console.log(action.type);
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    }
    default: {
      console.log("invalid action");
      return state;
    }
  }
}
