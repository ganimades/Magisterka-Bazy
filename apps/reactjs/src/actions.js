export const SET_LIST_TYPE = 'SET_LIST_TYPE';

export function setListType(listType) {
  return {
    type: SET_LIST_TYPE,
    payload: listType,
  };
}

//--------------------------------
export const ADD_TASK = 'ADD_TASK';

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export const UPDATE_TASK = 'UPDATE_TASK';

export function updateTask(task) {
  return {
    type: UPDATE_TASK,
    payload: task,
  };
}

export const DELETE_TASK = 'DELETE_TASK';

export function deleteTask(taskId) {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
}

export const UPDATE_LIST = 'UPDATE_LIST';

export function updateList(tasks) {
  return {
    type: UPDATE_LIST,
    payload: tasks,
  };
}

export function clearAll() {
  return {
    type: UPDATE_LIST,
    payload: [],
  };
}

//----------------------------
export const TOGGLE_PANEL = 'TOGGLE_PANEL';

export function togglePanel() {
  return {
    type: TOGGLE_PANEL,
  };
}