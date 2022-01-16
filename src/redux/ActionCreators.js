import * as ActionTypes from "./ActionTypes";

export const addTodo = (todo) => (dispatch) => {
  const newTodo = {
    activity: todo,
    complete: false,
  };
  dispatch(createTask(newTodo));
};

const createTask = (todo) => ({
  type: ActionTypes.ADD_TODO,
  payload: todo,
});

export const toggleToDo = (id) => ({
  type: ActionTypes.TOGGLE_COMPLETE,
  payload: id,
});

export const clearAllTasks = () => ({
  type: ActionTypes.CLEAR_TASKS,
});

export const deleteTasks = () => ({
  type: ActionTypes.DELETE_TASKS,
});
