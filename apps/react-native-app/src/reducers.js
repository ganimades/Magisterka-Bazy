import {
  ADD_TASK,
  DELETE_TASK, HIDE_PANEL,
  SET_LIST_TYPE, SHOW_PANEL,
  TOGGLE_PANEL,
  UPDATE_LIST,
  UPDATE_TASK,
} from './actions';
import { AsyncStorage } from 'react-native';

const initialState = {
  listType: '',
  tasks: [],
  isOpened: false,
};

let taskIdCounter = 0;

export function reducers(state = initialState, action) {
  switch (action.type) {
    case SET_LIST_TYPE:
      AsyncStorage.setItem('react-listType', action.payload);
      return {
        ...state,
        listType: action.payload,
      };
    case ADD_TASK: {
      const tasks = [...state.tasks];
      const newTask = action.payload;
      newTask.id = ++taskIdCounter;
      tasks.push(newTask);
      return {
        ...state,
        tasks,
      };
    }
    case UPDATE_TASK: {
      const tasks = [...state.tasks];
      const index = tasks.findIndex(value => value.id === action.payload.id);
      tasks.splice(index, 1, action.payload);
      return {
        ...state,
        tasks,
      };
    }
    case DELETE_TASK: {
      const tasks = [...state.tasks];
      const taskId = action.payload;
      const index = tasks.findIndex(value => value.id === taskId);
      tasks.splice(index, 1);
      return {
        ...state,
        tasks,
      };
    }
    case UPDATE_LIST:
      const tasks = action.payload;
      tasks.forEach(task => {
        task.id = ++taskIdCounter;
      });
      return {
        ...state,
        tasks,
      };
    case TOGGLE_PANEL:
      AsyncStorage.setItem('react-isOpened', String(!state.isOpened));
      return {
        ...state,
        isOpened: !state.isOpened,
      };
    case HIDE_PANEL:
      AsyncStorage.setItem('react-isOpened', String(false));
      return {
        ...state,
        isOpened: false,
      };
    case SHOW_PANEL:
      AsyncStorage.setItem('react-isOpened', String(true));
      return {
        ...state,
        isOpened: true,
      };
    default:
      return state;
  }
}