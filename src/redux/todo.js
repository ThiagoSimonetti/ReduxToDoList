import * as ActionTypes from "./ActionTypes";

const initialState = {
  todo: [
    { activity: "First ToDo", complete: false },
    { activity: "Second ToDo", complete: true },
  ],
};

export const ToDo = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const todo = action.payload;
      todo.id = state.todo.length;
      return { ...state, todo: state.todo.concat(todo) };
    case ActionTypes.TOGGLE_COMPLETE:
      let updatedTodo = [...state.todo];
      updatedTodo[action.payload].complete =
        !updatedTodo[action.payload].complete;
      return { ...state, todo: updatedTodo };
    case ActionTypes.DELETE_TASKS:
      return { ...state, todo: state.todo.filter((task) => !task.complete) };
    case ActionTypes.CLEAR_TASKS:
      return { todo: [] };

    default:
      return state;
  }
};
